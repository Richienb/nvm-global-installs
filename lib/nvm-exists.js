const commandExists = require("command-exists")

module.exports = async () => {
    try {
        await commandExists("nvm")
        return true
    } catch (err) {
        return false
    }
}
