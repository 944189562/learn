const http = require('http')

// 方式一
const server1 = http.createServer((req, res) => {
  res.end('Server1')
})

server1.listen(8000, () => console.log('server1 启动'))

const server2 = http.createServer((req, res) => {
  res.end('Server2')
})

server2.listen(() => {
  console.log('server2 启动')
  console.log(server2.address().port)
})

const server3 = new http.Server((req, res) => {
  res.end('Server3')
})

server3.listen(8003, () => console.log('server3 启动'))
