const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})

// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))
promise
  .then(res => {
    console.log(1, res)
    return res
  })
  .then(res => console.log(2, res))

promise.then(res => console.log(3, res))