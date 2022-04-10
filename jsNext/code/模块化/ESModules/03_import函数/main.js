import foo from './foo.js'

console.log(foo)
console.log(import.meta)
setTimeout(() => {
  console.log(foo)
}, 2000)