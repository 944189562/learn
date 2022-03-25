const _ = require('lodash')

function getSum(a, b, c) {
    return a + b + c
}

let curried = _.curry(getSum)

// console.log(curried(1, 2, 3))
// console.log(curried(1, 2)(3))
// console.log(curried(1)(2)(3))

// 柯里化案例

// function match(reg, str) {
//     return str.match(reg)
// }

const match = _.curry((reg, str) => str.match(reg))

const haveSpace = match(/\s+/g)
const habeNumber = match(/\d+/g)

// console.log(haveSpace('hello world'))
// console.log(habeNumber('abc123'))

const filter = _.curry((fn, array) => array.filter(fn))

// console.log(filter(haveSpace, ['John Conner', 'John_Donne']))

const findSpace = filter(haveSpace)

// console.log(findSpace(['John Conner', 'John_Donne']))

// 实现 curry 函数
function curry(func) {
    return function curriedFn(...args) {
        // 判断实参和形参的个数
        if (args.length < func.length) {
            return function () {
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }

        return func(...args)
    }
}

curried = curry(getSum)
console.log(curried(1, 2, 3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2)(3))

// function curry(func) {
//     return function curriedFn(...args) {
//         if (args.length < func.length) {
//             return function () {
//                 return curriedFn(...args.concat(Array.from(arguments)))
//             }
//         }

//         return func(...args)
//     }
// }
