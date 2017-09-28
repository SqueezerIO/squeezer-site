const axios = require(`axios`)
const crypto = require(`crypto`)
const querystring = require(`querystring`)
const _ = require(`lodash`)
const stringify = require(`json-stringify-safe`)
const colorized = require(`./output-color`)

const typePrefix = `wordpress__`

const conflictFieldPrefix = `wordpress_`
// restrictedNodeFields from here https://www.gatsbyjs.org/docs/node-interface/
const restrictedNodeFields = [`id`, `children`, `parent`, `fields`, `internal`]

/* If true, will output many console logs. */
let _verbose
let _siteURL
let _getNode
let _useACF
let _hostingWPCOM
let _auth
let _perPage
let _accessToken

let _parentChildNodes = []

const refactoredEntityTypes = {
  post: `${typePrefix}POST`,
  page: `${typePrefix}PAGE`,
  tag: `${typePrefix}TAG`,
  category: `${typePrefix}CATEGORY`,
}

// ========= Main ===========
exports.sourceNodes = async (
  { boundActionCreators, getNode, store },
  {
    baseUrl,
    protocol,
    hostingWPCOM,
    useACF,
    auth,
    verboseOutput,
    perPage = 100,
  }
) => {
  const {
    createNode,
    touchNode,
    setPluginStatus,
    createParentChildLink,
  } = boundActionCreators
  _verbose = verboseOutput
  _siteURL = `${protocol}://${baseUrl}`
  _getNode = getNode
  _useACF = useACF
  _hostingWPCOM = hostingWPCOM
  _auth = auth
  _perPage = perPage

  // If the site is hosted on wordpress.com, the API Route differs.
  // Same entity types are exposed (excepted for medias and users which need auth)
  // but the data model contain slights variations.
  let url
  if (hostingWPCOM) {
    url = `https://public-api.wordpress.com/wp/v2/sites/${baseUrl}`
    _accessToken = await getWPCOMAccessToken()
  } else {
    url = `${_siteURL}/wp-json`
  }

  if (_verbose) console.log()
  if (_verbose)
    console.log(
      colorized.out(
        `=START PLUGIN=====================================`,
        colorized.color.Font.FgBlue
      )
    )
  if (_verbose) console.time(`=END PLUGIN=====================================`)
  if (_verbose) console.log(``)
  if (_verbose)
    console.log(
      colorized.out(`Site URL: ${_siteURL}`, colorized.color.Font.FgBlue)
    )
  if (_verbose)
    console.log(
      colorized.out(
        `Site hosted on Wordpress.com: ${hostingWPCOM}`,
        colorized.color.Font.FgBlue
      )
    )
  if (_verbose)
    console.log(
      colorized.out(`Using ACF: ${useACF}`, colorized.color.Font.FgBlue)
    )
  if (_verbose)
    console.log(
      colorized.out(
        `Using Auth: ${_auth.htaccess_user} ${_auth.htaccess_pass}`,
        colorized.color.Font.FgBlue
      )
    )
  if (_verbose)
    console.log(
      colorized.out(
        `Verbose output: ${verboseOutput}`,
        colorized.color.Font.FgBlue
      )
    )
  if (_verbose) console.log(``)
  if (_verbose)
    console.log(
      colorized.out(`Mama Route URL: ${url}`, colorized.color.Font.FgBlue)
    )
  if (_verbose) console.log(``)

  // Touch existing Wordpress nodes so Gatsby doesn`t garbage collect them.
  _.values(store.getState().nodes)
    .filter(n => n.internal.type.slice(0, 10) === typePrefix)
    .forEach(n => touchNode(n.id))

  // Call the main API Route to discover the all the routes exposed on this API.
  let allRoutes
  try {
    let options = {
      method: `get`,
      url: url,
    }
    if (_auth) {
      options.auth = {
        username: _auth.htaccess_user,
        password: _auth.htaccess_pass,
      }
    }
    allRoutes = await axios({
      method: `get`,
      url: url,
    })
  } catch (e) {
    httpExceptionHandler(e)
  }

  if (allRoutes) {
    let validRoutes = getValidRoutes(allRoutes, url, baseUrl)

    if (_verbose) console.log(``)
    if (_verbose)
      console.log(
        colorized.out(
          `Fetching the JSON data from ${validRoutes.length} valid API Routes...`,
          colorized.color.Font.FgBlue
        )
      )
    if (_verbose) console.log(``)

    for (let route of validRoutes) {
      await fetchData(route, createNode)
      if (_verbose) console.log(``)
    }

    for (let item of _parentChildNodes) {
      createParentChildLink({
        parent: _getNode(item.parentId),
        child: _getNode(item.childNodeId),
      })
    }

    setPluginStatus({
      status: {
        lastFetched: new Date().toJSON(),
      },
    })

    if (_verbose)
      console.timeEnd(`=END PLUGIN=====================================`)
  } else {
    console.log(
      colorized.out(`No routes to fetch. Ending.`, colorized.color.Font.FgRed)
    )
  }
  return
}

/**
 * Get the pages of data
 *
 * @param {any} url
 * @param {number} [page=1]
 * @returns
 */
async function getPages(url, page = 1) {
  try {
    let result = []

    const getOptions = page => {
      let o = {
        method: `get`,
        url: `${url}?${querystring.stringify({
          per_page: _perPage,
          page: page,
        })}`,
      }
      if (_hostingWPCOM) {
        o.headers = {
          Authorization: `Bearer ${_accessToken}`,
        }
      } else {
        o.auth = _auth
          ? { username: _auth.htaccess_user, password: _auth.htaccess_pass }
          : null
      }
      return o
    }

    // Initial request gets the first page of data
    // but also the total count of objects, used for
    // multiple concurrent requests (rather than waterfall)
    const options = getOptions(page)
    const { headers, data } = await axios(options)

    result = result.concat(data)

    // Some resources have no paging, e.g. `/types`
    const wpTotal = headers[`x-wp-total`]

    const total = parseInt(wpTotal)
    const totalPages = parseInt(headers[`x-wp-totalpages`])

    if (!wpTotal || totalPages <= 1) {
      return result
    }

    if (_verbose) {
      console.log(`\nTotal entities :`, total)
      console.log(`Pages to be requested :`, totalPages)
    }

    // We got page 1, now we want pages 2 through totalPages
    const requests = _.range(2, totalPages + 1).map(getPage => {
      const options = getOptions(getPage)
      return axios(options)
    })

    return Promise.all(requests).then(pages => {
      const data = pages.map(page => page.data)
      data.forEach(list => {
        result = result.concat(list)
      })
      return result
    })
  } catch (e) {
    return httpExceptionHandler(e)
  }
}

/**
 * Gets wordpress.com access token so it can fetch private data like medias :/
 *
 * @returns
 */
async function getWPCOMAccessToken() {
  let result
  const oauthUrl = `https://public-api.wordpress.com/oauth2/token`
  try {
    let options = {
      url: oauthUrl,
      method: `post`,
      data: querystring.stringify({
        client_secret: _auth.wpcom_app_clientSecret,
        client_id: _auth.wpcom_app_clientId,
        username: _auth.wpcom_user,
        password: _auth.wpcom_pass,
        grant_type: `password`,
      }),
    }
    result = await axios(options)
    result = result.data.access_token
  } catch (e) {
    httpExceptionHandler(e)
  }

  return result
}

/**
 * Handles HTTP Exceptions (axios)
 *
 * @param {any} e
 */
function httpExceptionHandler(e) {
  const { status, statusText, data: { message } } = e.response
  if (_verbose)
    console.log(
      colorized.out(
        `The server response was "${status} ${statusText}"`,
        colorized.color.Font.FgRed
      )
    )
  if (message) {
    if (_verbose)
      console.log(
        colorized.out(
          `Inner exception message : "${message}"`,
          colorized.color.Font.FgRed
        )
      )
  }
}

/**
 * Extract valid routes and format its data.
 *
 * @param {any} allRoutes
 * @param {any} url
 * @param {any} baseUrl
 * @returns
 */
function getValidRoutes(allRoutes, url, baseUrl) {
  let validRoutes = []

  for (let key of Object.keys(allRoutes.data.routes)) {
    if (_verbose) console.log(`Route discovered :`, key)
    let route = allRoutes.data.routes[key]

    // A valid route exposes its _links (for now)
    if (route._links) {
      const entityType = getRawEntityType(route)

      // Excluding the "technical" API Routes
      const excludedTypes = [
        undefined,
        `v2`,
        `v3`,
        `1.0`,
        `2.0`,
        `embed`,
        `proxy`,
        ``,
        baseUrl,
      ]
      if (!excludedTypes.includes(entityType)) {
        if (_verbose)
          console.log(
            colorized.out(
              `Valid route found. Will try to fetch.`,
              colorized.color.Font.FgGreen
            )
          )

        const manufacturer = getManufacturer(route)

        let rawType = ``
        if (manufacturer === `wp`) {
          rawType = `${typePrefix}${entityType}`
        }

        let validType
        switch (rawType) {
          case `${typePrefix}posts`:
            validType = refactoredEntityTypes.post
            break
          case `${typePrefix}pages`:
            validType = refactoredEntityTypes.page
            break
          case `${typePrefix}tags`:
            validType = refactoredEntityTypes.tag
            break
          case `${typePrefix}categories`:
            validType = refactoredEntityTypes.category
            break
          default:
            validType = `${typePrefix}${manufacturer.replace(
              /-/g,
              `_`
            )}_${entityType.replace(/-/g, `_`)}`
            break
        }
        validRoutes.push({ url: route._links.self, type: validType })
      } else {
        if (_verbose)
          console.log(
            colorized.out(`Invalid route.`, colorized.color.Font.FgRed)
          )
      }
    } else {
      if (_verbose)
        console.log(colorized.out(`Invalid route.`, colorized.color.Font.FgRed))
    }
  }

  if (_useACF) {
    // The OPTIONS ACF API Route is not giving a valid _link so let`s add it manually.
    validRoutes.push({
      url: `${url}/acf/v2/options`,
      type: `${typePrefix}acf_options`,
    })
    if (_verbose)
      console.log(
        colorized.out(`Added ACF Options route.`, colorized.color.Font.FgGreen)
      )
    if (_hostingWPCOM) {
      // TODO : Need to test that out with ACF on Wordpress.com hosted site. Need a premium account on wp.com to install extensions.
      if (_verbose)
        console.log(
          colorized.out(
            `The ACF options pages is untested under wordpress.com hosting. Please let me know if it works.`,
            colorized.color.Effect.Blink
          )
        )
    }
  }

  return validRoutes
}

/**
 * Extract the raw entity type from route
 *
 * @param {any} route
 */
const getRawEntityType = route =>
  route._links.self.substring(
    route._links.self.lastIndexOf(`/`) + 1,
    route._links.self.length
  )

/**
 * Extract the route manufacturer
 *
 * @param {any} route
 */
const getManufacturer = route =>
  route.namespace.substring(0, route.namespace.lastIndexOf(`/`))

/**
 * Fetch the data from specified route url, using the auth provided.
 *
 * @param {any} route
 * @param {any} createNode
 * @param {any} parentNodeId (Optional parent node ID)
 */
async function fetchData(route, createNode, parentNodeId) {
  const type = route.type
  const url = route.url

  if (parentNodeId != undefined) {
    if (_verbose)
      console.log(
        colorized.out(`Extended node content`, colorized.color.Font.FgBlue),
        url
      )
  } else {
    if (_verbose)
      console.log(
        colorized.out(
          `=== [ Fetching ${type} ] ===`,
          colorized.color.Font.FgBlue
        ),
        url
      )
    if (_verbose) console.time(`Fetching the ${type} took`)
  }

  const routeResponse = await getPages(url, 1)

  if (routeResponse) {
    // Process entities to creating GraphQL Nodes.
    if (Array.isArray(routeResponse)) {
      for (let ent of routeResponse) {
        await createGraphQLNode(ent, type, createNode, parentNodeId)
      }
    } else {
      await createGraphQLNode(routeResponse, type, createNode, parentNodeId)
    }

    // TODO : Get the number of created nodes using the nodes in state.
    let length
    if (routeResponse && Array.isArray(routeResponse)) {
      length = routeResponse.length
    } else if (routeResponse && !Array.isArray(routeResponse)) {
      length = Object.keys(routeResponse).length
    }
    console.log(
      colorized.out(
        ` -> ${type} fetched : ${length}`,
        colorized.color.Font.FgGreen
      )
    )
  }

  if (_verbose && !parentNodeId) {
    console.timeEnd(`Fetching the ${type} took`)
  }
}

/**
 * Encrypts a String using md5 hash of hexadecimal digest.
 *
 * @param {any} str
 */
const digest = str =>
  crypto
    .createHash(`md5`)
    .update(str)
    .digest(`hex`)

/**
 * Create the Graph QL Node
 *
 * @param {any} ent
 * @param {any} type
 * @param {any} createNode
 * @param {any} parentNodeId (Optionnal parent node ID)
 */
function createGraphQLNode(ent, type, createNode, parentNodeId) {
  let id = !ent.id ? (!ent.ID ? 0 : ent.ID) : ent.id
  let node = {
    id: `${type}_${id.toString()}`,
    children: [],
    parent: `__SOURCE__`,
    internal: {
      type: type,
    },
  }

  if (type === refactoredEntityTypes.post) {
    node.id = `POST_${ent.id.toString()}`
    node.internal.type = refactoredEntityTypes.post
  } else if (type === refactoredEntityTypes.page) {
    node.id = `PAGE_${ent.id.toString()}`
    node.internal.type = refactoredEntityTypes.page
  } else if (type === refactoredEntityTypes.tag) {
    node.id = `TAG_${ent.id.toString()}`
    node.internal.type = refactoredEntityTypes.tag
  } else if (type === refactoredEntityTypes.category) {
    node.id = `CATEGORY_${ent.id.toString()}`
    node.internal.type = refactoredEntityTypes.category
  }

  node = addFields(ent, node, createNode)

  if (
    type === refactoredEntityTypes.post ||
    type === refactoredEntityTypes.page
  ) {
    // TODO : Move this to field recursive and add other fields that have rendered field
    node.title = ent.title.rendered
    node.content = ent.content.rendered
    node.excerpt = ent.excerpt.rendered
  }

  node.internal.content = JSON.stringify(node)
  node.internal.contentDigest = digest(stringify(node))
  createNode(node)

  if (parentNodeId) {
    _parentChildNodes.push({ parentId: parentNodeId, childNodeId: node.id })
  }
}

/**
 * Loop through fields to validate naming conventions and extract child nodes.
 *
 * @param {any} ent
 * @param {any} newEnt
 * @param {function} createNode
 * @returns the new entity with fields
 */
function addFields(ent, newEnt, createNode) {
  newEnt = recursiveAddFields(ent, newEnt)

  // TODO : add other types of child nodes
  if (_useACF && ent.acf != undefined && ent.acf != `false`) {
    //Create a child node with acf field json
    const acfNode = {
      id: `${newEnt.id}_ACF_Field`,
      children: [],
      parent: newEnt.id,
      internal: {
        type: `${typePrefix}ACF_Field`,
        content: JSON.stringify(ent.acf),
      },
    }
    acfNode.internal.contentDigest = digest(stringify(acfNode))
    createNode(acfNode)
    _parentChildNodes.push({ parentId: newEnt.id, childNodeId: acfNode.id })
  } else if (newEnt.meta && newEnt.meta.links && newEnt.meta.links.self) {
    //The entity as a link to more content for this entity
    fetchData(
      { url: newEnt.meta.links.self, type: `${newEnt.internal.type}_Extended` },
      createNode,
      newEnt.id
    )
  }
  return newEnt
}

/**
 * Add fields recursively
 *
 * @param {any} ent
 * @param {any} newEnt
 * @returns the new node
 */
function recursiveAddFields(ent, newEnt) {
  for (let k of Object.keys(ent)) {
    if (!newEnt.hasOwnProperty(k)) {
      let key = getValidName(k)
      if (key !== `acf`) {
        newEnt[key] = ent[k]
        // Nested Objects & Arrays of Objects
        if (typeof ent[key] === `object`) {
          if (!Array.isArray(ent[key]) && ent[key] != null) {
            newEnt[key] = recursiveAddFields(ent[key], {})
          } else if (Array.isArray(ent[key])) {
            if (ent[key].length > 0 && typeof ent[key][0] === `object`) {
              ent[k].map((el, i) => {
                newEnt[key][i] = recursiveAddFields(el, {})
              })
            }
          }
        }
      }
    }
  }
  return newEnt
}

/**
 * Validate the GraphQL naming convetions & protect specific fields.
 *
 * @param {any} key
 * @returns the valid name
 */
function getValidName(key) {
  let nkey = key
  const NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/
  if (!NAME_RX.test(nkey) || restrictedNodeFields.includes(nkey)) {
    nkey = `${conflictFieldPrefix}${nkey}`.replace(/-|__|:|\.|\s/g, `_`)
    if (_verbose)
      console.log(
        colorized.out(
          `Object with key "${key}" breaks GraphQL naming convention. Renamed to "${nkey}"`,
          colorized.color.Font.FgRed
        )
      )
  }
  return nkey
}
