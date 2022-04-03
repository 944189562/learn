const name = 'jz'
const age = '18'
const obj = {
  name,
  age
}

function sum(num1, num2) {
  return num1 + num2
}

// 1. 导出方案 module.exports
// module.exports.name = name
module.exports = obj