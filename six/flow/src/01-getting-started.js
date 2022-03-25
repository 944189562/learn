// @flow

function sum(a: number, b: number) {
    return a + b
}

sum(100, 100)

sum('100', 100)

// 类型推断 没有定义类型根据传入的参数推断类型

function square(n: number): number {
    return n * n
}

square(100)

let num: number = 100

// void 没有返回
function func(): void {

}

// 原始类型
const a: string = 'foobar'
const b: number = NaN // 100 Infinity
const c: boolean = true
const d: null = null
const e: void = undefined // 特殊情况
const f: symbol = Symbol()

// 数组类型
const arr1: Array<number> = [1, 2, 3] // 泛型
const arr2: number[] = [1, 2, 3]

// 元组 固定长度，多个类型
const foo: [string, number] = ['foo', 100]

// 对象类型
const obj1: { foo: string, bar: number } = { foo: 'string', bar: 100 }
const obj2: { foo?: string, bar: number } = { bar: 100 } // ? 可选

const obj3: { [string]: string } = {} // 可以添加任意数量， 键和值的类型都是字符串
obj3.key1 = 'foo'

// 函数类型 Function Types
function foo1(callback: (string, number) => void) {
    callback('string', 100)
}

foo1(function (str, n) {
    // str => string
    // n => number
})

// 特殊类型
const a1: 'foo' = 'foo' // 字面量

const type: 'success' | 'warning' | 'danger' = 'danger'

type StringOrNumber = string | number // 别名

const b1: StringOrNumber = 'string'

const gender: ?number = null // maybe 类型 ?number === number | null | void
// const gender: number | null | void = undefined

// Mixed Any 所有类型 Mixed 强类型 Any 弱类型

function passMixed(value: mixed) {
    value.substr(1)

    value * value
}

function passAny(value: any) {
    value.substr(1)

    value * value
}