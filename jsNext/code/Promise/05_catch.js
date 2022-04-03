const promise = new Promise((resolve, reject) => {
  resolve('success')
  // reject('failure')
})

promise.then(res => {
  throw new Error('cuole')
}).catch(err => {
  console.log('err: ', err)
  // return '111'
  throw new Error('catch err')
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log('err: ', err)
})

