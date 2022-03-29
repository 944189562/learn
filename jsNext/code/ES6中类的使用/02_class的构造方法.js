class Person {
  // 类的构造方法
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = 'shanghai'
  }

  // 类的实例方法
  eating() {
    console.log(this.name + ' eating!')
  }

  running() {
    console.log(this.name + ' running!')
  }

  // 类的访问器，进行拦截
  get address() {
    return this._address
  }

  set address(value) {
    this._address = value
  }

  // 静态方法，类方法
  static createPerson(name, age){
    return new Person(name, age)
  }

  static staticMethod() {
    console.log('PersonStaticMethod')
  }
}

// var p1 = new Person('jz', 18)
// var p2 = new Person('zs', 18)
// console.log(p1, p2)
// p1.eating()
// p2.eating()
//
// console.log(Object.getOwnPropertyDescriptors(Person.prototype))

class Student extends Person {
  // JS 引擎在解析子类的时候要求，如果有实现继承
  // 那么子类的构造方法，在使用this之前
  constructor(name, age, sno) {
    super(name, age)
    this.sno = sno
  }

  studying() {
    console.log(this.name + ' studying')
  }

  // 父类方法重写
  running() {
    console.log('Student ' + this.name + ' running!')
  }

  eating() {
    // 调用父类的方法
    // 复用逻辑
    super.eating();
    console.log('Student ' + this.name + ' eating little')
  }

  // 静态方法重写，逻辑复用
  static staticMethod() {
    super.staticMethod()
    console.log('StudentStaticMethod')
  }
}

var stu = new Student('jz', 18, 1)
console.log(stu)
stu.eating()
stu.running()
Student.staticMethod()