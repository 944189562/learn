const fs = require('fs')

// 获取 abc.txt 的文件信息
const filepath = './abc.txt'

// 1. 同步方式，阻塞后续代码执行
const info = fs.statSync(filepath)
console.log('后续代码执行')
console.log(info)

// 2. 异步IO回调
fs.stat(filepath, (err, info) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(info)
})
console.log('后续代码执行')

// 3. Promise
fs.promises.stat(filepath).then(console.log).catch(console.log)
console.log('后续代码执行')