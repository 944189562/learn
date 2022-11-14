// console.log(__dirname)
// console.log(__filename)
// console.log(process.cwd())

const path = require('path')

const basePath = './user/jz'
const filename = 'abc.txt'

const filepath = path.resolve(basePath, filename)
// console.log(filepath)

// const filepath1 = path.join(basePath, filename)
// console.log(filepath1)

console.log(path.dirname(filepath))
console.log(path.basename(filepath))
console.log(path.extname(filepath))