const miSend = require("./mi-send/index.js")
const miHttpError = require("./mi-http-error/index.js")
module.exports = (app) => {
    app.use(miSend)
    app.use(miHttpError)
}