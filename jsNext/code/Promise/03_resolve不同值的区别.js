// resolve 传入普通值或对象，这个值会作为then回调的参数
new Promise((resolve, reject) => {
  resolve('aaa')
}).then(res => console.log(res))

// resolve 传入另一个Promise，这个新的Promise会决定原Promise的状态
new Promise((resolve, reject) => {
  resolve(new Promise((resolve1, reject1) => {
    // resolve1('aaa')
    reject1('error')
  }))
}).then(res => console.log('success: ', res), err => console.log('failure: ', err))

// resolve 传入一个对象，并且这个对象有实现then方法，会执行该then方法，并且根据返回的then方法的结果来决定Promise的状态
new Promise((resolve, reject) => {
  resolve({
    then: (resolve1, reject1) => {
      // resolve1('aaa--')
      reject1('bbb--')
  }
  })
}).then(res => console.log('success: ', res), err => console.log('error: ', err))