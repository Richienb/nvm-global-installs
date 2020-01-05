"use strict"


const path = require("path")
const _ = require("lodash")
const readPkg = require("read-pkg")
const pMap = require("p-map")
const nvmExists = require("./lib/nvm-exists")
const readFolders = require("./lib/read-folders")
const getPackageDirectory = require("./lib/get-package-directory")

module.exports = async (version) => {
    if (!await nvmExists()) return {}

    const pkgDir = await getPackageDirectory()
    let versions = await readFolders(pkgDir)
    if (version) {
        version = _.castArray(version)
        versions = versions.filter((value) => version.includes(value))
    }

    return _.fromPairs(await pMap(versions, async (version) => {
        const dir = path.join(pkgDir, version, "node_modules")
        const dirs = (await readFolders(dir)).filter((dir) => !dir.startsWith("."))
        return [version, _.fromPairs(await pMap(dirs, async (mDir) => {
            const { name, version } = await readPkg({ cwd: path.join(dir, mDir) })
            return [name, version]
        }))]
    }))
}
