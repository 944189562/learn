const http = require('http')
const url = require('url')
const qs = require('querystring')

// 创建一个服务器
const server = http.createServer((req, res) => {
  // const {url, method, headers} = req
  // if (url === '/login') {
  //   res.end('welcome')
  // } else if (url === '/users') {
  //   res.end('用户列表')
  // } else {
  //   res.end('404')
  // }

  const {pathname, query} = url.parse(req.url)
  console.log(pathname, query)

  if (pathname === '/login') {
    // qs 废弃，现在使用URLSearchParams 代替
    // const {username, password} = qs.parse(query)
    const params = new URLSearchParams(query)
    const {username, password} = Object.fromEntries(params)
    console.log(username, password)
    res.end('result~')
  }
})

// 启动服务器，指定端口号和主机
server.listen(8888, 'localhost', () => {
  console.log('server listen')
})