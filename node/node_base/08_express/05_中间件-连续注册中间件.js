const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('common middleware')
  next()
})

app.get('/home', (req, res, next) => {
  console.log('home path and method middleware1')
  next()
  console.log('结束了1')
}, (req, res, next) => {
  console.log('home path and method middleware2')
  next()
  console.log('结束了2')
}, (req, res, next) => {
  console.log('home path and method middleware3')
  next()
  console.log('结束了3')
}, (req, res, next) => {
  console.log('home path and method middleware4')
  res.end('Hello Home')
})

app.listen(8000, () => {
  console.log('express 初体验启动成功')
})