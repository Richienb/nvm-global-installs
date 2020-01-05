const commandExists = require("command-exists")

module.exports = () => new Promise((resolve) => commandExists("nvm").then(() => resolve(true)).catch(() => resolve(false)))
