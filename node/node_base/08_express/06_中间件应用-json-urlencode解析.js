const express = require('express')
const qs = require('querystring')

const app = express()

// 配置中间件，用来解析数据
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', data => {
//       const info = JSON.parse(data.toString())
//       req.body = Object.assign({}, info) // 将body放入req对象上，接下里可以直接用body
//     })
//
//     req.on('end', () => {
//       next()
//     })
//   } else {
//     next()
//   }
// })

// 使用express提供给我们的body解析
// body-parser: express3.x 内置express框架
// body-parser: express4.x 被分离出去
// body-parser类似功能: express4.16.x 内置成函数
// express.json() 解析 application/json 数据的中间件
app.use(express.json())

// extended
// true: 那么对 urlencoded进行解析时, 它使用的是第三方库: qs
// false: 那么对 urlencoded进行解析时, 它使用的是Node内置模块: querystring
app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('Hello Home')
})

app.post('/products', (req, res, next) => {
  console.log(req.body)
  res.end('Add Product Info Sucess')
})

app.listen(8000, () => {
  console.log('express 初体验启动成功')
})