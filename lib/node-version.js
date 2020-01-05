const execa = require("execa")

module.exports = async () => {
    const { stdout: data } = await execa("node", ["-v"])
    return data
}
