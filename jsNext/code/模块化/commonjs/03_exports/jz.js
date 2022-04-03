const obj = {
  name: 'jz',
  age: 18
}

setTimeout(() => {
  obj.name = 'zs'
}, 1000)

setTimeout(() => console.log(obj), 5000)

// exports.obj = obj
module.exports = obj
// 源码
// module.exports = {}
// exports = module.exports
// exports 和 module.exports 指向的同一个对象

// exports = {} 重新赋值，和module.exports 不是同一个对象，所以这种写法错误