const express = require('express')

// express 是一个函数 createApplication
// 返回 app
const app = express()

// 监听默认路径
app.get('/', ((req, res, next) => {
  res.end('Hello Express')
}))

app.post('/', ((req, res, next) => {
  res.end('Hello Express')
}))

app.post('/login', (req, res, next) => {
  res.end('欢迎回来')
})

app.listen(8000, () => {
  console.log('express 初体验启动成功')
})