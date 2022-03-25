// 抽象类 只能被继承

export { }

abstract class Animal {
    eat(food: string): void {
        console.log(food)
    }

    abstract run(distance: number): void
}

class Dog extends Animal {
    run(distance: number): void {
        console.log(distance)
    }
}

const dog = new Dog()
dog.eat('food')
dog.run(100)