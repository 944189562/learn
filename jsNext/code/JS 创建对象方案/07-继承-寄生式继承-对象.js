// 原型式继承
function object(obj) {
  function Fn() {}
  Fn.prototype = obj
  return new Fn()
}

// 工厂函数 + 原型继承
function createStudent(name) {
  var newObj = object(Person.prototype)
  newObj.name = name
  newObj.studying = function() {
    console.log(this.name + ' studying')
  }

  return newObj
}

function Person(name, age) {}

Person.prototype.eating = function() {
  console.log(this.name + ' eating~')
}

var stu = createStudent(Person.prototype)
console.log(stu)
