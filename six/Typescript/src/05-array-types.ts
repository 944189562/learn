// 数组类型

const arr1: Array<number> = [1, 2, 3]

const arr2: number[] = [1, 2, 3]

function sum(...args: number[]) {
    return args.reduce((prev, cur) => prev + cur, 0)
}

sum(...arr1)