const Vue = require('vue')
const express = require('express')
const fs = require('fs')

const render = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.template.html', 'utf-8')
})

const server = express()
server.get('/', (req, res) => {
  const app = new Vue({
    template: `
      <div id="app">
        <h1>{{ msg }}</h1>
      </div>
    `,
    data: {
      msg: 'zs 哈哈'
    }
  })

  render.renderToString(app,{
    // 可选参数，绑定html模板中的数据
    title: 'zs 哈哈',
    meta: `
      <meta name="description" content="zs 哈哈">
    `
  }, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error.')
    }
    // 设置header 防止返回乱码
    res.setHeader('Content-type', 'text/html; charset=utf8')
    // 或者返回完整的html 设置 <meta charset="UTF-8" />
    res.end(html)
  })
})

server.listen(3000, () => {
  console.log('server running at port 3000')
})
