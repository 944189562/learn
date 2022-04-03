// const { name, age } = require('./jz.js')
// console.log(name, age)

// const obj = require('./jz')
// console.log(obj.name)
// setTimeout(() => {
//   console.log(obj.name)
//   obj.name = 'jz'
// }, 2000)
// console.log(module.paths)

const name = require('./foo')

setTimeout(() => console.log(name), 2000)
console.log(name)