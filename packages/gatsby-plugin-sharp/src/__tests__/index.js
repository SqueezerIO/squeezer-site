const path = require(`path`)

const { base64, responsiveSizes } = require(`../`)

describe(`gatsby-plugin-sharp`, () => {
  const args = {
    duotone: false,
    grayscale: false,
    rotate: false,
  }
  const absolutePath = path.join(__dirname, `images/test.png`)
  const file = getFileObject(absolutePath)

  describe(`responsiveSizes`, () => {
    it(`includes responsive image properties, e.g. sizes, srcset, etc.`, async () => {
      const result = await responsiveSizes({ file })

      expect(result).toMatchSnapshot()
    })

    it(`adds pathPrefix if defined`, async () => {
      const pathPrefix = `/blog/posts`
      const result = await responsiveSizes({
        file,
        args: {
          pathPrefix,
        },
      })

      expect(result.src.indexOf(pathPrefix)).toBe(0)
      expect(result.srcSet.indexOf(pathPrefix)).toBe(0)
    })

    it(`accounts for pixel density`, async () => {
      const result = await responsiveSizes({
        file: getFileObject(path.join(__dirname, `images/144-density.png`)),
      })

      expect(result).toMatchSnapshot()
    })

    it(`does not change the arguments object it is given`, async () => {
      const args = { maxWidth: 400 }
      await responsiveSizes({
        file,
        args,
      })

      expect(args).toEqual({ maxWidth: 400 })
    })
  })

  describe(`base64`, () => {
    it(`converts image to base64`, async () => {
      const result = await base64({
        file,
        args,
      })

      expect(result).toMatchSnapshot()
    })
  })
})

function getFileObject(absolutePath) {
  return {
    id: `${absolutePath} absPath of file`,
    absolutePath,
    extension: `png`,
    internal: {
      contentDigest: `1234`,
    },
  }
}
