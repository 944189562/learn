// 函数类型

export { }

// 函数声明
function func1(a: number, b: number = 10, c?: string, ...rest: number[]): string {
    return 'func1'
}

func1(100)

// 函数表达式

const func2: (a: number, b: number) => string = function (a: number, b: number): string {
    return 'func2'
}