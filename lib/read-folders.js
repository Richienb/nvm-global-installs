const fs = require("fs-extra")

module.exports = async (dir) => {
    const dirs = await fs.readdir(dir, { withFileTypes: true })

    return dirs
        .filter((dir) => dir.isDirectory())
        .map((dir) => dir.name)
}
