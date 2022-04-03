async function foo() {
  console.log('foo start')

  console.log('foo end')

  // return 123
  // return Promise.resolve(345)
  // return {
  //   then(resolve, reject) {
  //     resolve('test')
  //   }
  // }

  // throw error
  throw new Error('出错了')
}

console.log('script start')
// 异步函数的返回值一定是一个Promise 实例
const promise = foo()
promise.then(res => {
  console.log('promise exec', res)
}, err => console.log('error: ', err))

console.log('script end')

/*
  script start
  foo start
  foo end
  script end
  error:  Error: 出错了
*/

