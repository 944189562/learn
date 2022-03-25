// 函数式编程
function once(fn) {
  let done = false
  return function(...args) {
    if(!done) {
      done = true
      fn.apply(this, args)
    } else {
      console.log('已执行过')
    }
  }
}

function curry(fn) {
  return curryFn(...args) {
    if(args.length < fn.length) {
      return function() {
        return curryFn(...args.concat([...arguments]))
      }
    } else {
      return fn(...args)
    }
  }
}

// 组合函数从右到左执行
const compose = (...fns) => val => fns.reverse().reduce((acc, fn) => fn(acc), val)
// 管道函数从左到右执行
const pipe = (...fns)=> val => fns.reduce((acc,fn) => fn(acc),val)

// 函数缓存
const memoize = function(func, content) {
  let cache = Object.create(null)

  content = content || this

  return (...key) => {
    if(!cache[key]) {
      cache[key] = func.apply(content, key)
    }
    return cache[key]
  }
}