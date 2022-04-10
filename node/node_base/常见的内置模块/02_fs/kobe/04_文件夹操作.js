const fs = require('fs')

const dirPath = './jz'

// 1. 创建文件夹
if (!fs.existsSync(dirPath)) {
  fs.mkdir(dirPath, err => console.log(err))
}

// 2. 读取文件夹
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(files)
})