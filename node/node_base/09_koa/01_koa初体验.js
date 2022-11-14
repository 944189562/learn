const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  console.log('middleware exec1')
  ctx.response.body = 'Hello World1'
})

app.use((ctx, next) => {
  console.log('middleware exec2')
  ctx.response.body = 'Hello World2'
})

app.listen(8000, () => {
  console.log('Koa 初体验，启动成功')
})