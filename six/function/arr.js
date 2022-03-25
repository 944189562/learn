// map
const map = (array, fn) => {
    let result = []
    for (let value of array) {
        result.push(fn(value))
    }
    return result
}

// 测试
// let arr = [1, 2, 3, 4]
// const res = map(arr, value => value * value)
// console.log(res)

// every
const every = (array, fn) => {
    let result = true
    for (let value of array) {
        result = fn(value)
        if (!result) {
            break
        }
    }

    return result
}

// test
// let arr = [9, 11, 12]
// const res = every(arr, value => value > 9)
// console.log(res)

// some
const some = (array, fn) => {
    let result = false
    for (let value of array) {
        result = fn(value)
        if (result) break
    }
    return result
}

// test
// let arr = [1, 3, 5, 7]
// const res = some(arr, value => value % 2 === 0)
// console.log(res)