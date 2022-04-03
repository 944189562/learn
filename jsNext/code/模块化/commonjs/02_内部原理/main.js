// const { name, age } = require('./jz.js')
// console.log(name, age)

const jz = require('./jz')
console.log(jz.name)
setTimeout(() => console.log(jz.name), 2000)