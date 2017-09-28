const webpack = require(`webpack`)

// Add Glamor support
exports.modifyWebpackConfig = ({ config }) =>
  config.plugin(`Glamor`, webpack.ProvidePlugin, [
    {
      Glamor: `glamor/react`,
    },
  ])

// Add Glamor support
exports.modifyBabelrc = ({ babelrc }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      [`transform-react-jsx`, { pragma: `Glamor.createElement` }],
      `glamor/babel-hoist`,
    ]),
  }
}
