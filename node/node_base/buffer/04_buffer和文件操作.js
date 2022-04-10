const fs = require('fs')
const sharp = require('sharp')

// // 读取文本文件
// fs.readFile('./foo.txt', {encoding: "utf-8"}, (err, data) => {
//   console.log(data)
//   // 李银河
// })
//
// fs.readFile('./foo.txt', (err, data) => {
//   console.log(data)
//   console.log(data.toString())
//   // <Buffer e6 9d 8e e9 93 b6 e6 b2 b3>
//   // 李银河
// })

// 读取图片
// fs.readFile('./404.png', (err, data) => {
//   console.log(data)
//   fs.writeFile('bar.png', data, (err) => console.log(err))
// })

sharp('./404.png')
  .resize(200, 300)
  .toBuffer()
  .then(data => {
    fs.writeFile('baz.png', data, console.log)
  })