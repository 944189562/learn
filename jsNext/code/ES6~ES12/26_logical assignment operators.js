let message = ''
// message = message || 'Hello World'
// 1. ||= 逻辑或运算符
message ||= 'Hello World'

console.log(message)

// const obj = {
//   foo() {
//     console.log('foo')
//
//   }
// }
//
// obj.foo && obj.foo()
// 2. &&= 逻辑与运算符

let info = {
  name: 'jz'
}

// info = info && info.name
info &&= info.name

console.log(info)

// 3. ??= 逻辑空运算符
// let msg = null
// msg ??= 'default value'
// console.log(msg)

let msg = 'default value'
let newMsg = msg.replace(/e/ig, 'a')
console.log(msg, newMsg)
