const fs = require('fs')

// 传统复制写入
// fs.readFile('./bar.txt', (err, data) => {
//   fs.writeFile('./boz.txt', data, console.log)
// })

// Stream
const reader = fs.createReadStream('./bar.txt')
const writer = fs.createWriteStream('./boz.txt')

reader.pipe(writer)
reader.on('end', () => {
  writer.close()
})