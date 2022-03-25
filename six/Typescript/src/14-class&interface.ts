// 类与接口

export { }

interface Eat {
    eat(food: string): void
}

interface Run {
    run(distance: number): void
}

class Person implements Eat, Run {
    eat(food: string): void {
        console.log(`优雅的进餐：${food}`)
    }

    run(distance: number): void {
        console.log(`直立行走：${distance}`)
    }
}

class Animal implements Eat, Run {
    eat(food: string): void {
        console.log(`狼吞虎咽的吃：${food}`)
    }

    run(distance: number): void {
        console.log(`爬行：${distance}`)
    }
}
