function Student(name, age) {
  this.name = name
  this.age = age
}

function Person() {}

// Reflect.construct 执行new Student()，创建出来的对象的隐式原型指向Person的显示原型
const stu = Reflect.construct(Student, ['jz', 18], Person)
console.log(stu.__proto__ === Person.prototype) // true