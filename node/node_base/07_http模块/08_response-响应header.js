const http = require('http')

// 创建一个服务器
const server = http.createServer((req, res) => {
  // 设置响应header
  // 方式一
  // res.setHeader('Content-Type', 'text/plain;charset=utf8')
  // 方式二
  res.writeHead(200, {
    // 'Content-Type': 'text/plain;charset=utf8'
    // 'Content-Type': 'text/html;charset=utf8'
    'Content-Type': 'application/json;charset=utf8'
  })
  // 响应请求
  res.end('<h2>Hello Server</h2>')
})

// 启动服务器，指定端口号和主机
server.listen(8888, 'localhost', () => {
  console.log('server listen')
})