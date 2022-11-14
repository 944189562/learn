const http = require('http')
const qs = require('querystring')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    if (req.method === 'POST') {
      // 客户端发送过来的数据 body 中有很多信息
      // 注意：设置文件上传的编码格式为binary二进制
      req.setEncoding('binary')

      const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '')
      const totalLength = Number(req.headers['content-length'])
      let body = ''

      req.on('data', data => {
        body += data
        res.write(`文件上传进度：${body.length / totalLength * 100}%\n`)
      })

      req.on('end', () => {
        // 处理body
        // 1. 拿到文件类型 Content-Type
        const payload = qs.parse(body, '\r\n', ': ')
        const type = payload['Content-Type']
        // 2. 通过查看 body 发现 type 后面就是file数据
        const typeIndex = body.indexOf(type)
        const typeLength = type.length
        let imageData = body.substring(typeIndex + typeLength)

        // 3. 将中间的两个空格去掉
        imageData = imageData.replace(/^\s\s*/, '')

        // 4. 将最后的 boundary 去掉
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

        const extname = type.split('/')[1]
        console.log(type)
        fs.writeFile(`${new Date().getTime()}jz.${extname}`, imageData, {encoding: 'binary'}, (err) => {
          res.end('文件上传成功~')
        })
      })
    }
  }
})

server.listen(9000, () => {
  console.log('server port: 9000')
})