// 自定义模块化规范

// a.js
var module1 = (function () {
  var name = 'jz'
  var age = 18

  return {
    name: name,
    age: age
  }
})()

// b.js
var module2 = (function () {
  var name = 'jz'
  var age = 18

  return {
    name: name,
    age: age
  }
})()

// c.js
module1.name
module2.age