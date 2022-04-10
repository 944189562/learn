const fs = require('fs')
const path = require('path')

const ejs = require('ejs')

const compiler = (filename, data) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(filename, {data}, {}, (err, str) => {
      if (err) {
        reject(err)
        return
      }
      resolve(str)
    })
  })
}

const writeToFile = (dest, content) => {
  if (fs.existsSync(dest)) {
    console.log('the file already exists~')
    return
  }
  return fs.promises.writeFile(dest, content)
}

// 判断 当前路径是否存在，不存在创建对应文件夹
const createDirSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true
  } else if (createDirSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname)
    return true
  }
  return false
}

const compilerAndWriteToFile = async (templatePath, name, data, dest) => {
  const result = await compiler(templatePath, data)
  // 2. 输出文件
  if (createDirSync(dest)) {
    const targetDest = path.resolve(dest, name)
    await writeToFile(targetDest, result)
  }
}

module.exports = {
  compiler,
  writeToFile,
  createDirSync,
  compilerAndWriteToFile
}