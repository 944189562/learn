const express = require('express')

// express 是一个函数 createApplication
// 返回 app
const app = express()

// static 静态资源部署
app.use(express.static('./build'))

app.listen(8000, () => {
  console.log('express 初体验启动成功')
})