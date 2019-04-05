const fs = require("fs")
const fsExtra = require("fs-extra")
const path = require("path")

exports.onCreateDevServer = () => {
  fsExtra.ensureSymlink(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}

exports.onPreBuild = () => {
  console.log("Copying locales")
  

  fsExtra.removeSync(path.join(__dirname, "/public/locales"))

  fsExtra.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )

  fsExtra.copySync(
    path.join(__dirname, "_redirects"),
    path.join(__dirname, "/public/_redirects")
  )
}

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
      ],
    },
    plugins: [
      plugins.define({
        'process.env': {
          'NODE_ENV': process.env.NODE_ENV
        }
      }),
    ],
  })
}