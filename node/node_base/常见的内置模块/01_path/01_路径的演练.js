const path = require('path')

const basePath = './User/Jz'
const filename = 'abc.txt'

const filepath = path.resolve(basePath, filename)
// console.log(filepath)

// 1. 获取路径信息
// console.log(path.dirname(filepath))
// console.log(path.basename(filepath))
// console.log(path.extname(filepath))

// 2. join 路径拼接
const filepath1 = path.join(basePath, filename)
console.log(filepath1)

// 3. resolve 路径拼接
const filepath3 = path.resolve(basePath, filename)
console.log(filepath3)