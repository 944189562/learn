const Koa = require('koa')

const app = new Koa()

// use 注册中间件
app.use((ctx, next) => {
  console.log('middleware exec')
  if (ctx.request.url === '/login') {
    if (ctx.request.method === 'POST') {
      ctx.response.body = 'Login Success'
    }
  } else {
    ctx.response.body = 'other request~'

  }
})

app.listen(8000, () => {
  console.log('Koa 初体验，启动成功')
})