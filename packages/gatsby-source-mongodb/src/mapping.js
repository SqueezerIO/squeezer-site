const _ = require(`lodash`),
  crypto = require(`crypto`)

module.exports = function(node, key, text, mediaType, createNode) {
  const str = _.isString(text) ? text : ` `
  const id = `${node.id}${key}MappingNode`
  const mappingNode = {
    id: id,
    parent: node.id,
    [key]: str,
    children: [],
    internal: {
      type: _.camelCase(`${node.internal.type} ${key} MappingNode`),
      mediaType: mediaType,
      content: str,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(str))
        .digest(`hex`),
    },
  }

  node.children = node.children.concat([mappingNode.id])
  createNode(mappingNode)

  return mappingNode.id
}
