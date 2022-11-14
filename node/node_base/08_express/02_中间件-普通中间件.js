const express = require('express')

const app = express()

// 普通中间件
// use注册一个中间件（回调函数）
app.use((req, res, next) => {
  console.log('注册一个普通中间件1')
  // res.end('Hello World')
  next()
})

app.use((req, res, next) => {
  console.log('注册一个普通中间件2')
  next()
})

app.use((req, res, next) => {
  console.log('注册一个普通中间件3')
  next()
})

app.use((req, res, next) => {
  console.log('注册一个普通中间件4')
  res.end('Hello World')
})


app.listen(8000, () => {
  console.log('普通中间件 初体验启动成功')
})