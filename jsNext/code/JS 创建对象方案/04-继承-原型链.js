function Person() {
  this.name = 'jz'
  this.friends = []
}

Person.prototype.eating = function () {
  console.log(this.name + ' eating~')
}

function Student(sno) {
  this.sno = sno
}

Student.prototype = new Person()

Student.prototype.studying = function (){
  console.log(this.name + ' studing~')
}

var student1 = new Student(111)
var student2 = new Student(112)

// 直接给student2 添加 name 属性
student2.name = 'zs'

// 获取引用，修改引用的属性，会相互影响
student2.friends.push('ls')

console.log(student1)
console.log(student2)
student1.eating()
student1.studying()
// Person { sno: 111 }
// Person { sno: 112, name: 'zs' }
// jz eating~
// jz studing~