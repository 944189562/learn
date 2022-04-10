const path = require('path')
const fs = require('fs')

const ejs = require('ejs')

const compile = (templateName, data) => {
  const templatePosition = path.resolve(__dirname, `../templates/${templateName}`)
  console.log(templatePosition)
  return new Promise(((resolve, reject) => {
    ejs.renderFile(templatePosition, {data}, {}, (err, result) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      }

      resolve(result)
    })
  }))
}

// /src/components/xxxx
const createDirSync = (pathName) => {
  if (fs.existsSync(pathName)) {
    return true
  }

  if (createDirSync(path.dirname(pathName))) {
    fs.mkdirSync(pathName)
    return true
  }
}

const writeFileSync = (dest, content) => {
  return fs.promises.writeFile(dest, content)
}

module.exports = {
  compile,
  writeFileSync,
  createDirSync
}