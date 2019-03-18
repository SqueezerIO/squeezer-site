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

  // fs.unlinkSync(__dirname, "/public/locales")

  fsExtra.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}

