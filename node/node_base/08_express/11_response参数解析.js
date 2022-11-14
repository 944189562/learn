const express = require('express')

// express 是一个函数 createApplication
// 返回 app
const app = express()

app.get('/login', (req, res, next) => {
  const obj = {
    name: 'jz',
    age: 18
  }
  // 设置响应码
  res.status(204)

  // 返回json数据
  // res.type('application/json')
  // res.end(JSON.stringify(obj))
  // 设置返回json
  res.json(obj)
})

app.post('/products/:id', (req, res, next) => {
  // params 中保存 path后面的id参数
  console.log(req.params) // {id: '123'}

  res.end('商品详情数据')
})


app.listen(8000, () => {
  console.log('express 初体验启动成功')
})