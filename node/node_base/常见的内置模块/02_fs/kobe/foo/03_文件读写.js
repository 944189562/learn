const fs = require('fs')

const filepath = './abc.txt'

// 1. 文件的写入
const data = '你好，justin'
fs.writeFile(filepath, data, {flag: 'a', encoding: 'utf8'}, (err) => {
  console.log(err)
})

// 2. 文件的读取
fs.readFile(filepath, {encoding: 'utf-8'}, (err, info) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(info)
})