// 类的声明
class Person {

}

// 类的表达式
// let Animal = class {
//
// }
console.log(Person.prototype) // {}
console.log(Person.prototype.__proto__) // [Object: null prototype] {}
console.log(Person.prototype.constructor) // [class Person]
console.log(typeof Person) // function

var p = new Person()
console.log(p.__proto__ === Person.prototype) // true