const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()

// 加载配置信息
const config = require('./webpack.config')
const compiler = webpack(config)

// 中间件
const middleware = webpackDevMiddleware(compiler)
app.use(middleware)

app.listen(8000, () => {
  console.log('server listen 8000~')
})