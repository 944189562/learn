import ArrayStack from "./ArrayStack_rafactor";

function DecToBin(dec: number): string {
    // 除2取余，逆序排列
    const stack = new ArrayStack<number>()

    let decimal = dec
    while (decimal > 0) {
        let result = decimal % 2
        stack.push(result)
        decimal = Math.floor(decimal / 2)
    }

    let binary = ''
    while (!stack.isEmpty()) {
        binary += stack.pop()
    }

    return binary
}

// console.log(DecToBin(35))
// console.log(DecToBin(100))