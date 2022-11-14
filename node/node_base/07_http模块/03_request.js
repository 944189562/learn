const http = require('http')

// 创建一个服务器
const server = http.createServer((req, res) => {
  const {url, method, headers} = req
  console.log(url, method, headers)
  res.end('Hello Server')
})

// 启动服务器，指定端口号和主机
server.listen(8000, 'localhost', () => {
  console.log('server listen')
})