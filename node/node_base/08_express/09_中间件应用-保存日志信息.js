const fs = require('fs')

const express = require('express')
const morgan = require('morgan')

const app = express()
const writeStream = fs.createWriteStream('./logs/access.log', {flags: 'a+'})
// app.use(morgan('combined', {stream: writeStream}))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms', {stream: writeStream}))

app.get('/home', (req, res, next) => {
  res.end('home')
})

app.listen(8000, () => {
  console.log('express 初体验启动成功')
})