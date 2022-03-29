let obj = {
  name: 'jz',
  age: 18,
  _adress: ''
}
// 数据属性描述符
Object.defineProperty(obj, 'name', {
  // configurable: false,
  // enumerable: false,
  // writable: false,
  value:'jz'
})

console.log(obj) // {}
delete obj.name
obj.name = 'lz'
console.log(obj.name) // jz

// 存储属性描述符
Object.defineProperty(obj, 'adress', {
  configurable: true,
  enumerable: true,
  get() {
    return obj._adress
  },
  set(value) {
    foo(value)
    obj._adress = value
  }
})

obj.adress = 'shanghai'
console.log(obj)

function foo(...args) {
  console.log('setter proxy => ', ...args)
}

