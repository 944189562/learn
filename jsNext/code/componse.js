"use strict"
function compose(...fns) {
  const length = fns.length
  for (let i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw TypeError('Expected arguments are function')
    }
  }
  return function (...args) {
    let index = 0
    let result = length ? fns[index].apply(this, args) : args
    while(true) {
      index++
      if(index>=length) {
        break
      }
      result = fns[index].call(this, result)
    }
    return result
  }
}

console.log(compose(add, square, double)(1))

function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

function add(num) {
  return num + 2
}

// 从左往右执行
const compose = (...fns) => value => fns.reduce((pre, cur) => cur(pre), value)
// 从右往左执行
const pipe = (...fns) => value => fns.reduceRight((pre, cur) => cur(pre), value)

console.log(compose(add, square, double)(1))
console.log(pipe(add, square, double)(1))
