const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('common middleware01')
  next()
})

// 路径匹配中间件
// use注册一个中间件（回调函数）
app.use('/home', (req, res, next) => {
  console.log('home middleware 01')
  // res.end('home middleware 01')
  next()
})

app.use((req, res, next) => {
  console.log('common middleware02')
  next()
})

app.use('/home', (req, res, next) => {
  console.log('home middleware 02')
  res.end('home middleware 02')
})

app.listen(8000, () => {
  console.log('路径匹配中间件 初体验启动成功')
})