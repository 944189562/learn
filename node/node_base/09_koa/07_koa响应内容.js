const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  console.log('middleware exec')
  // 设置内容
  // 1. string
  // ctx.response.body = 'Hello World'
  // 2. json
  // ctx.response.body = {
  //   name: 'jz',
  //   age: 18
  // }
  // 3. array
  // ctx.response.body = ['jz', 'curry']
  ctx.body = 'Hello koa~'

  // 状态码 204 没有内容
  // ctx.response.status = 204
  ctx.status = 200
})

app.listen(8000, () => {
  console.log('Koa 初体验，启动成功')
})