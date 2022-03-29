var obj = {
  name: 'jz',
  age: 18
}

// 原型式继承 三种方法
function createObject1(o) {
  var newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}

function createObject2(o) {
  function Fn() {}
  Fn.prototype = o
  return new Fn()
}

// info的原型指向obj
var info = Object.create(obj)
console.log(info)
console.log(info.__proto__)
