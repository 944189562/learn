import IStack from "./IStack"

// 数组实现一个栈结构
// 泛型 T
class ArrayStack<T = any> implements IStack<T> {
    private data: T[] = []

    // 入栈
    push(element: T): void {
        this.data.push(element)
    }
    // 出栈
    // 联合类型 T | undefined
    pop(): T | undefined {
        return this.data.pop()
    }
    // 栈顶元素
    peek(): T | undefined {
        return this.data[this.data.length - 1]
    }
    // 栈是否为空
    isEmpty(): boolean {
        return this.data.length === 0
    }
    // 栈长度
    get size(): number {
        return this.data.length
    }
}

// test code
// let stack = new ArrayStack<string>()

// stack.push('aaa')
// stack.push('bbb')
// stack.push('ccc')

// console.log(stack.peek())
// console.log(stack.size())

// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())

// console.log(stack.isEmpty())
// console.log(stack.size())

// let stack1 = new ArrayStack<number>()

// stack1.push(1)

export default ArrayStack