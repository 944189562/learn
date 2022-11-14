const Koa = require('koa')

const userRouter = require('./router/user')

const app = new Koa()

app.use((ctx, next) => {
  console.log('middleware exec')
  // ctx.response.body = 'Hello World'
  next()
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
  console.log('Koa路由服务启动成功~')
})