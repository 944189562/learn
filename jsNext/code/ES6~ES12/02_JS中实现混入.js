class Person{

}

// class Runner {
//   running(){}
// }
//
// class Eater {
//   eating(){}
// }

function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log('running~')
    }
  }

  return NewClass
}

function mixinEating(BaseClass) {
  // 可以省略 class 后的类名
  return class extends BaseClass {
    eating() {
      console.log('eating~')
    }
  }
}

// JS中只支持单继承
class Student extends Person {

}

// 混入 running
var NewStudent = mixinEating(mixinRunner(Student))

var ns = new NewStudent()
ns.running()
ns.eating()
