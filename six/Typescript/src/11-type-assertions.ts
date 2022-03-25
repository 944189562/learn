// 类型断言 辅助明确变量类型 并不是类型转换 编译过程中存在

export { }

const arrs = [110, 120, 119, 113]

const res = arrs.find(value => value > 0)

const num1 = res as number

const num2 = <number>res // JSX 下不能使用