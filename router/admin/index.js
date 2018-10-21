const Router = require('koa-router')
const router = new Router()

router.get('/', (ctx) => {
    ctx.response.body = '<h1>index page</h1>'
})
router.get('/home',async (ctx) => {
    await ctx.render('about', {
        name: 'sunvalley'
    });
})
router.post('/data', (ctx) => {
    const query = ctx.request.body
    if (query.name === 'zyh') {
        ctx.body = {
        resCode: 200,
        msg: `用户名为${query.name}`
        }
    } else {
        ctx.body = {
        resCode: 200,
        msg: `用户名不存在，或不是为${query.name}`
        }
    }
})
router.get('/404', (ctx) => {
    ctx.response.body = '<h1>404 Not Found</h1>'
})

module.exports = router