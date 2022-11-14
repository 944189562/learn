const path = require('path')

const express = require('express')
const multer = require('multer')

const app = express()

// 自定义上传参数路径
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

// dest 参数，上传文件的保存路径
const upload = multer({
  // dest: './uploads/'
  storage
})

// 注意，永远不要注册全局的 multer 中间件
// app.use(upload.any())
app.post('/user', upload.any(), (req, res, next) => {
  console.log(req)
  res.end('welcome~')
})

// upload.single 单个文件 req.file
// upload.array 多个文件 req.files
// app.post('/upload', upload.single('file'), (req, res, next) => {
//   console.log(req.file)
//   res.end('文件上传成功')
// })

app.post('/upload', upload.array('file'), (req, res, next) => {
  console.log(req.files)
  res.end('文件上传成功')
})


app.listen(8000, () => {
  console.log('express 初体验启动成功')
})