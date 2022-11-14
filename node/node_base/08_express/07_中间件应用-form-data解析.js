const express = require('express')
const multer = require('multer')

const app = express()

// 解析 form-data
// 安装 express multer库
const upload = multer()

app.use(upload.any())

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('用户登录成功！')
})

app.listen(8000, () => {
  console.log('for-data解析服务器启动成功')
})