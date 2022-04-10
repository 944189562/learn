function requestData() {
  return new Promise((resolve, reject) => {
    console.log('requestData')
    setTimeout(() => resolve(123), 2000)
  })
}

async function foo() {
  // 1. await promise
  const res = await requestData()

  // 2. await 普通值
  // const res = await 123

  // 3. await thenable 对象
  // const res = await {
  //   then: function (resolve) {
  //     resolve(345)
  //   }
  // }

  // 4. reject值
  // const res = await requestData()
  console.log(res)
}

console.log('start')

foo().then(res => console.log('res: ', res)).catch(err => console.log('error => ', err))

console.log('end')
