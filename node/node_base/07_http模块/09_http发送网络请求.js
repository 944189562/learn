const http = require('http')

// http 发送 get 请求
// http.get('http://localhost:8888', res => {
//   res.on('data', data => {
//     console.log(data.toString())
//   })
//
//   res.on('end', () => {
//     console.log('获取所有结果')
//   })
// })

// http 发送 post 请求
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8888
}, res => {
  res.on('data', data => {
    console.log(data.toString())
  })

  res.on('end', () => {
    console.log('获取所有结果')
  })
})

// 需要end结束，不然会请求会阻塞
req.end()