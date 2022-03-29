// Symbol 作为key
let s1 = Symbol()
let s2 = Symbol()
let s3 = Symbol()

console.log(s1 === s2)

let obj = {
  name: 'jz',
  age: 18,
  [s1]: 'abc',
  [s2]: 'cba'
}

obj[s3] = 'nba'
const s4 = Symbol()
Object.defineProperty(obj, s4, {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'baz'
})

console.log(obj[s1], obj[s2], obj[s3], obj[s4])
// 注意：不能使用.语法获取 obj.s1
// 使用Symbol作为key，在遍历obj中一些方法获取不到
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))
const skeys = Object.getOwnPropertySymbols(obj)
for(const skey of skeys) {
  console.log(obj[skey])
}

// Symbol.for(key)
const sa = Symbol.for('aaa')
const sb = Symbol.for('aaa')
console.log(sa === sb)
const key = Symbol.keyFor(sa)
console.log(key)

