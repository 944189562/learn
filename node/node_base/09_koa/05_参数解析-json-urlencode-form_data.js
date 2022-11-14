const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const multer = require('koa-multer')

const app = new Koa()

const upload = multer()

app.use(bodyParser())
app.use(upload.any())

app.use((ctx, next) => {
  // multer 返回参数绑定在 http req.body上
  console.log(ctx.req.body)
  console.log(ctx.req.files)
  console.log(ctx.request.body)
  ctx.response.body = 'Hello World'
})

app.listen(8000, () => {
  console.log('Koa 初体验，启动成功')
})