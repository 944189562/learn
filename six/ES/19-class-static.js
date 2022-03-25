// static 静态方法
class Person {
    static create(name) {
        return new Person(name)
    }

    constructor(name) {
        this._name = name
    }

    say() {
        console.log(`hi, my name is ${this._name}`)
    }
}

const tom = Person.create('Tom')
tom.say()

const bob = Person.create('Bob')
bob.say()

// extends 继承
class Student extends Person {
    constructor(name, age) {
        super(name)
        this.age = age
    }

    hello() {
        super.say()
        console.log(`my age is ${this.age}`)
    }
}

const s = new Student('justin', '16')
s.hello()