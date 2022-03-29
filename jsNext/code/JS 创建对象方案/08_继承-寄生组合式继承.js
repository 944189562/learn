// 原型式继承
function createObject(obj) {
  function Fn() {}
  Fn.prototype = obj
  return new Fn()
}

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype, {
    constructor: {
      value: SuperType,
      writable: true,
      configurable: true
    }
  })
  Object.defineProperty(SubType, 'prototype', {
    writable: false
  })
  // 原型式继承
  // SubType.prototype = createObject(SuperType.prototype)
  // // 改变 constructor 指向 SubType，明确类型
  // Object.defineProperty(SubType.prototype, 'constructor', {
  //   configurable: true,
  //   enumerable: false,
  //   writable: true,
  //   value: SubType
  // })

}

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.eating = function() {
  console.log(this.name + ' eating')
}

function Student(name, age, sno) {
  // 借用构造函数，绑定 this 传值
  Person.call(this, name, age)
  this.sno = sno
}

// Student.prototype = Object.create(Person.prototype)
// Object.defineProperty(Student, 'constructor', {
//   configurable: true,
//   enumerable: false,
//   writable: true,
//   value: Student
// })
inheritPrototype(Student, Person)

Student.prototype.studying = function () {
  console.log(this.name + ' studying')
}

var stu = new Student('jz', 18, 1)
console.log(stu)
stu.eating()
stu.studying()
