const promise = new Promise((resolve, reject) => {
  console.log('executor start')
  // throw new Error('出现错误')
  // setTimeout(() => resolve('fulfilled'), 1000)
  resolve('fulfilled')
  // reject('rejected')
  console.log('executor end')
})

console.log('开始')

promise
  .finally(() => console.log('finally'))
  .then(res => {
    console.log('res1: ', res)
    return '1111'
    // throw new Error('res1 error')
  })
  // .catch(err => {
  //   console.log(err)
  //   return 'catch1:'
  // })
  .then(res => console.log('res2: ', res))

console.log('结束')
//
// Promise.resolve(1).then(res => console.log(1))

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000)
// })
//
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(2), 1000)
// })
//
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(3), 500)
// })
//
// Promise
//   .race([p1, p2, p3])
//   .then(res => console.log('fulfilled: ', res))
//   .catch(err => console.log('rejected: ', err))