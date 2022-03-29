function curry(fn) {
  function curryFn(...args) {
    if(args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function(...args1) {
        return curryFn(...args, ...args1)
      }
    }
  }

  return curryFn
}

function sum(num1, num2, num3) {
  return num1 + num2 + num3
}



// console.log(curry(sum)(1)(2)(3))
// console.log(curry(sum)(1,2)(3))
// console.log(curry(sum)(1)(2,3))

function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}: ${message}]`)
}
// 柯里化实现
const curryLog = date => type => message => console.log(`[${date.getHours()}:${date.getMinutes()}][${type}: ${message}]`)
const type = curryLog(new Date())('log')
type('test')
type('测试')