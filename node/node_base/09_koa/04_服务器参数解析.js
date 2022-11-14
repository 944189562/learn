const Koa = require('koa')

const app = new Koa()

const Router = require('koa-router')

const userRouter = new Router({prefix: '/users'})

userRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.params)
  console.log(ctx.request.query)
  //  { id: '123' }
  // [Object: null prototype] { name: 'jz', age: '18' }
})

app.use(userRouter.routes())

// use 注册中间件
// app.use((ctx, next) => {
//   console.log('middleware exec')
//   console.log(ctx.request.url)
//   console.log(ctx.request.query)
//   // params 没有解析，需要自己解析
//   console.log(ctx.request.params)
// //  middleware exec
// // /users/123?name=jz&age=18
// // [Object: null prototype] { name: 'jz', age: '18' }
// // undefined
// })

app.listen(8000, () => {
  console.log('Koa 初体验，启动成功')
})