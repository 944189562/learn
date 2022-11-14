const http = require('http')
const url = require('url')
const qs = require('querystring')

// 创建一个服务器
const server = http.createServer((req, res) => {
  const {pathname} = url.parse(req.url)
  if (pathname === '/login') {
    if (req.method === 'POST') {
      req.setEncoding('utf-8')
      //
      req.on('data', data => {
        console.log(typeof data) // string
        const {username, password} = JSON.parse(data)
        console.log(username, password)
      })

      res.end('Hello World')
    }
    // res.end('result~')
  }
})

// 启动服务器，指定端口号和主机
server.listen(8888, 'localhost', () => {
  console.log('server listen')
})