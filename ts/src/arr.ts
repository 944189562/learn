// 声明数字类型的数组
let arr: number[] = [1, 2, 3]
arr.push(4)

let arr1: Array<number> = [4, 5, 6]

// 声明长度固定的类型数组，不可以使用数组的 API 操作该数组
let arr2: [number, string, boolean] = [1, '2', true]
// arr2.push(1)
