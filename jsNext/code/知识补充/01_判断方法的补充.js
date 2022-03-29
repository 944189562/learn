var obj = {
  name: 'jz',
  age: 18
}

var info = Object.create(obj, {
  address: {
    writable: true,
    value: 'shanghai'
  }
})

// hasOwnProperty 判断属性是否属于对象，不包括原型继承属性
console.log(info.hasOwnProperty('name')) // false
console.log(info.hasOwnProperty('address')) // true

// in / for in 操作符 包括原型继承属性
console.log('address' in info) // true
console.log('name' in info) // true

// instanceof 判断当前构造函数有没有出现在对象的原型链中
console.log(info instanceof Function)
console.log(info instanceof Object)

// isPrototypeOf 用于检测某个对象，是否出现某个实例对象的原型链上
function Person() {

}

var p = new Person()

console.log(Person.prototype.isPrototypeOf(p))
console.log(obj.isPrototypeOf(info))



