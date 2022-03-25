// class

// function Person(name) {
//     this.name = name
// }

// Person.prototype.say = function () {
//     console.log(`hi, my name is ${this.name}`)
// }

class Person {
    constructor(name) {
        this._name = name
    }

    say() {
        console.log(`hi, my name is ${this._name}`)
    }
}

const p = new Person('Tom')
p.say()