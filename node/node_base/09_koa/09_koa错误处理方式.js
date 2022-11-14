const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  const isLogin = false
  if (!isLogin) {
    ctx.app.emit('error', new Error('请登录~'), ctx)
  }
})

app.on('error', (err, ctx) => {
  // 逻辑判断
  ctx.status = 401
  ctx.body = err.message
})

app.listen(8000, () => {
  console.log('Koa 初体验，启动成功')
})