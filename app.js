const path = require('path')
const Koa = require('koa');
const KoaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const render = require('koa-art-template');
const app = new Koa();

// 自定义中间件管理
const middleW = require('./middleware/index.js')
middleW(app)

// 加载中间件
app.use(bodyParser())

// 加载中间件
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});

// 静态文件设置
app.use(KoaStatic(__dirname, '/public/'))

// 路由设置
const router = require('./router/index.js')
router(app)

// 创建服务器
const port = 3000 || 1000
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})