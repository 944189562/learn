const fs = require('fs')
const path = require('path')

const dirPath = './jz'

// 1. 创建文件夹
if (!fs.existsSync(dirPath)) {
  fs.mkdir(dirPath, err => console.log(err))
}

// 2. 读取文件夹
// fs.readdir(dirPath, (err, files) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(files)
//   files.forEach(file => {
//     const filePath = path.resolve(dirPath, file)
//     fs.stat(filePath, (err, info) => {
//       if(err) {
//         console.log(err)
//         return
//       }
//       console.log(info.isDirectory())
//     })
//   })
// })

function readFiles(dirPath) {
  fs.readdir(dirPath, {withFileTypes: true}, (err, files) => {
    if (err) {
      console.log(err)
      return
    }
    for (const file of files) {
      const filePath = path.resolve(dirPath, file.name)
      if (file.isDirectory()) {
        readFiles(filePath)
        return
      }
      console.log(file.name)
    }
  })
}

// readFiles(dirPath)
// 重命名
fs.rename(dirPath, './kobe', err => console.log(err))