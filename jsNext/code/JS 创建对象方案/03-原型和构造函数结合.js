function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.eating = function() {
  console.log(this.name + ' eating!')
}

var p1 = new Person('zs', 18)
var p2 = new Person('ls', 18)

console.log(p1)
console.log(p2)
