const _ = require('lodash')

function getArea(r) {
    console.log(r)
    return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))

// 模拟memoize
function memoize(fn) {
    let cache = new Map()
    return function() {
        const key = JSON.stringify(arguments)
        if(!cache.has(key)){
            cache.set(key, fn.apply(this, arguments))
        }

        return cache.get(key)
    }
}

let getAreaWithMemory = memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))

