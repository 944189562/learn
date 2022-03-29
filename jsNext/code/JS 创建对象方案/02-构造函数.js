function Person(name, age) {
  this.name = name
  this.age = age

  this.eating = function() {
    console.log(this.name + ' eating!')
  }
}

/*
* 弊端：每次创建对象需要为每个对象去创建一个函数对象实例
* */

var p1 = new Person('jz', '18')
var p2 = new Person('ls', 18)

console.log(p1)
console.log(p2)
// Person { name: 'jz', age: '18', eating: [Function (anonymous)] }
// Person { name: 'ls', age: 18, eating: [Function (anonymous)] }