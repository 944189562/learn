const path = require('path')

const filePath = '/user/jz/dev/test.js'

console.log(path.basename(filePath))
console.log(path.basename(filePath, '.js'))
console.log(path.basename(filePath, path.extname(filePath)))

console.log(path.dirname(filePath))

console.log(path.extname(filePath))

