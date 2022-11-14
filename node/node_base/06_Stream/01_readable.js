const fs = require('fs')

// 创建读取流
const reader = fs.createReadStream('./foo.txt', {
  start: 3,
  end: 8,
  highWaterMark: 2
})

reader.on('open', () => console.log('文件被打开'))
reader.on('close', () => console.log('close 文件被关闭'))
reader.on('end', () => console.log('end 文件被关闭'))


reader.on('data', (data) => {
  console.log(data)

  // 暂停读取
  reader.pause()

  // 1s 后恢复读取
  setTimeout(() => reader.resume(), 1000)
})