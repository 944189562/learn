// import IStack from "./IStack"
interface IStack<T> {
    push(element: T): void
    pop(): T | undefined
    peek(): T | undefined
    isEmpty(): boolean
    size(): number
}

class ArrayStack<T = any> implements IStack<T> {
    // 定义一个数组
    private data: T[] = []

    push(element: T): void {
        this.data.push(element)
    }

    pop(): T | undefined {
        return this.data.pop()
    }
    peek(): T | undefined {
        return this.data[this.data.length - 1]
    }
    isEmpty(): boolean {
        return this.data.length === 0
    }
    size(): number {
        return this.data.length
    }
}

// test 
// let stack1 = new ArrayStack<string>()
// stack1.push('a')
// stack1.push('b')
// stack1.push('c')
// stack1.push('d')
// stack1.push('e')

// console.log(stack1.size())
// console.log(stack1.peek())

// console.log(stack1.pop())
// console.log(stack1.pop())
// console.log(stack1.pop())
// console.log(stack1.pop())
// console.log(stack1.pop())

// console.log(stack1.isEmpty())
// console.log(stack1.peek())
// End

// 十进制转二进制
function decToBin(dec: number): string {
    const stack = new ArrayStack<number>()

    let decimal = dec
    while (decimal > 0) {
        stack.push(decimal % 2)
        decimal = Math.floor(decimal / 2)
    }

    let str: string = ''
    while (!stack.isEmpty()) {
        str += stack.pop()
    }

    return str
}

// test
// console.log(decToBin(35))
// console.log(decToBin(100))
// End

// 有效的括号
function isValid(str: string): boolean {
    if (!str.length) return true

    const stack = new ArrayStack<string>()
    const strMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const isLeft = (str: string): boolean => !!strMap[str as keyof typeof strMap]

    for (let i = 0; i < str.length; i++) {
        let cur = str[i]

        if (isLeft(cur)) {
            stack.push(strMap[cur as keyof typeof strMap])
        } else {
            if (stack.isEmpty()) return false
            if (cur !== stack.pop()) return false
        }
    }

    return stack.isEmpty()
}

// test
console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('{[()]}[()]'))
console.log(isValid('()[]]{}'))
// End

export { }