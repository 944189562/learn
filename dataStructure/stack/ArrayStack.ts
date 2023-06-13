// 数组实现一个栈结构
class ArrayStack {
    private data: any[] = []

    // 入栈
    push(element: any): void {
        this.data.push(element)
    }
    // 出栈
    pop(): any {
        return this.data.pop()
    }
    // 栈顶元素
    peek(): any {
        return this.data[this.data.length - 1]
    }
    // 栈是否为空
    isEmpty(): boolean {
        return this.data.length === 0
    }
    // 栈长度
    size(): number {
        return this.data.length
    }
}

let stack = new ArrayStack()

stack.push('aaa')
stack.push('bbb')
stack.push('ccc')

console.log(stack.peek())
console.log(stack.size())

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack.isEmpty())
console.log(stack.size())

export {}