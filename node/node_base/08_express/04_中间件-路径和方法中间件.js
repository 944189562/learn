const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('common middleware')
  next()
})

app.get('/home', (req, res, next) => {
  console.log('path and method middleware1')
  res.end('Hello home')
})

app.post('/login', (req, res, next) => {
  console.log('path and method middleware1')
  res.end('jz, welcome back~')
})

app.listen(8000, () => {
  console.log('express 初体验启动成功')
})