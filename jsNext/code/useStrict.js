"use strict";
function foo() {
  console.log('foo 运行了')
  console.log(this)
}

// 自执行函数，严格模式下 this 为 undefined
foo() // undefined

setTimeout(function() {
  console.log(this) // window
}, 1000)

setTimeout(() => {
  console.log(this) // window
}, 1000)

/*
* setTimeout(fn, delay) {
*   fn.apply(window)
* }
* */