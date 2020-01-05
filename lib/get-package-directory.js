const path = require("path")
const execa = require("execa")
const splitOnFirst = require("split-on-first")
const fs = require("fs-extra")

module.exports = async () => {
    const { stdout: res } = await execa("npm", ["ls", "-g"])
    const dir = await fs.realpath(splitOnFirst(res, "\n")[0])
    return path.resolve(dir, "..")
}
