const { transpileModule } = require(`typescript`)
const path = require(`path`)

const test = /\.tsx?$/
const compilerDefaults = {
  target: `esnext`,
  experimentalDecorators: true,
  jsx: `react`,
}

module.exports.resolvableExtensions = () => [`.ts`, `.tsx`]

module.exports.modifyWebpackConfig = ({ config }, { compilerOptions }) => {
  // CommonJS to keep Webpack happy.
  const copts = Object.assign({}, compilerDefaults, compilerOptions, {
    module: `commonjs`,
  })

  // React-land is rather undertyped; nontrivial TS projects will most likely
  // error (i.e., not build) at something or other.
  const opts = { compilerOptions: copts, transpileOnly: true }

  // Load gatsby babel plugin to extract graphql query
  const extractQueryPlugin = path.resolve(
    __dirname,
    `../gatsby/dist/utils/babel-plugin-extract-graphql.js`
  )

  config.loader(`typescript`, {
    test,
    loaders: [
      `babel?${JSON.stringify({ plugins: [extractQueryPlugin] })}`,
      `ts-loader?${JSON.stringify(opts)}`,
    ],
  })
}

module.exports.preprocessSource = (
  { contents, filename },
  { compilerOptions }
) => {
  // overwrite defaults with custom compiler options
  const copts = Object.assign({}, compilerDefaults, compilerOptions, {
    target: `esnext`,
    module: `es6`,
  })
  // return the transpiled source if it's TypeScript, otherwise null
  return test.test(filename)
    ? transpileModule(contents, { compilerOptions: copts }).outputText
    : null
}
