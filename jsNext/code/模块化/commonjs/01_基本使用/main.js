// 使用另外一个模块导出的对象，require 导入
// const jz = require('./jz.js')
// console.log(jz)

// 使用解构
const {name, age} = require('./jz.js')
console.log(name, age)