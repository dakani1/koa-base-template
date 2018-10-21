
const adminRouter = require('./admin')
module.exports = (app) =>　{
    /*绑定路由中间件*/
    app.use(adminRouter.routes())
        .use(adminRouter.allowedMethods())

}