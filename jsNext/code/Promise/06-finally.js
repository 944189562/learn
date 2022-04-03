const promise = new Promise((resolve, reject) => {
  resolve('success')
  // reject('failure')
})

promise.finally(() => {
  console.log('finally')
}).then(res => console.log('res: ', res))
.catch(err => console.log('err: ', err))