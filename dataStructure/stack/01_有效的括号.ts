import ArrayStack from "./ArrayStack_rafactor";

function isValid(str: string): boolean {
    let stack = new ArrayStack<string>()

    for (let i = 0; i < str.length; i++) {
        let s = str[i]
        switch (s) {
            case '(':
                stack.push(')')
                break

            case '[':
                stack.push(']')
                break

            case '{':
                stack.push('}')
                break

            default:
                if (s !== stack.pop()) return false
        }
    }
    return stack.isEmpty()
}

console.log(isValid('()')) 
console.log(isValid('()[]{}'))
console.log(isValid('{[()]}[()]'))
console.log(isValid('(]'))