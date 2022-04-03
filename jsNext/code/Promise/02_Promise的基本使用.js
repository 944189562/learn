const promise = new Promise((resolve, reject) => {
  console.log(1)
  setTimeout(() => {
    console.log(2)
    resolve('success')
  }, 2000)
})

promise
  .then(res => {
    console.log(3)
  })

function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(url) {
        resolve('success')
      } else {
        reject('error')
      }
    }, 3000)
  })
}

requestData().then(res => console.log(res), error => console.log('err: ', error))