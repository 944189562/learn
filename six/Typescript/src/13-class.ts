// 类 封装、继承、多态 用来描述一类相同类型的对象

export { }

class Person {
    // 声明属性，必须有初始值
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${this.age}`)
    }
}

// 访问修饰符 共有 私有 受保护

class Person1 {
    // 声明属性，必须有初始值
    public name: string
    private age: number // 私有变量
    protected gender: boolean // 只允许在子类中访问

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.gender = true
    }

    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${this.age}`)
    }
}

// const tom = new Person1('tom', 18)
// console.log(tom.age)
// console.log(tom.gender)

class Student extends Person1 {
    constructor(name: string, age: number) {
        super(name, age)
        console.log(this.gender)
    }
}

class Student1 extends Person1 {
    private constructor(name: string, age: number) {
        super(name, age)
        console.log(this.gender)
    }

    static create(name: string, age: number) {
        return new Student1(name, age)
    }
}

const jack = Student1.create('jack', 18)

// 只读属性

class Person2 {
    // 声明属性，必须有初始值
    public name: string
    private age: number // 私有变量
    protected readonly gender: boolean // readonly 放在 protected 后面

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.gender = true
    }

    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${this.age}`)
    }
}
