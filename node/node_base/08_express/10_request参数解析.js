const express = require('express')

// express 是一个函数 createApplication
// 返回 app
const app = express()

app.get('/login', (req, res, next) => {
  // /login?username=jz&password=123
  console.log(req.query) // { username: 'jz', password: '123' }
  res.end('用户登录成功')
})

app.post('/products/:id', (req, res, next) => {
  // params 中保存 path后面的id参数
  console.log(req.params) // {id: '123'}
  console.log(req.query)
  res.end('商品详情数据')
})


app.listen(8000, () => {
  console.log('express 初体验启动成功')
})