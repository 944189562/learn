// 写入文件
const fs = require('fs')

// 传统的写入方式
// fs.writeFile('./bar.txt', 'Hello Stream', {flag: 'a+'}, console.log)

// Stream的写入方式
const writer = fs.createWriteStream('./bar.txt', {
  // window 上 flags设置a ，会追加到最后
  flags: 'r+',
  start: 5
})

writer.write('你好啊', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('写入成功')
})

writer.write('李银河', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('写入成功')
})

// 关闭 close 不常用，用end方法
// writer.close()
// end 做了两件事，一是写入Hello World，二是调用close
writer.end('Hello World')

