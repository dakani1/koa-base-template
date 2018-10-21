const miSend = require("./mi-send/index.js")
module.exports = (app) => {
    app.use(miSend)
}