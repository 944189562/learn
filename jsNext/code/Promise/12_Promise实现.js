// https://promisesaplus.com/
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

class JzPromise {
  constructor(executor) {
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = new Set()
    this.onRejectedFns = new Set()

    executor(this.resolve.bind(this), this.reject.bind(this))
  }

  resolve(value) {
    if (this.status === STATUS_PENDING) {
      // 添加微任务
      queueMicrotask(() => {
        if(this.status !== STATUS_PENDING) return
        console.log('resolve')
        this.status = STATUS_FULFILLED
        this.value = value
        this.onFulfilledFns.forEach(onFulfilled => onFulfilled(this.value))
      })
    }
  }

  reject(reason) {
    if (this.status === STATUS_PENDING) {
      // 添加微任务
      queueMicrotask(() => {
        if(this.status !== STATUS_PENDING) return
        console.log('reject')
        this.status = STATUS_REJECTED
        this.reason = reason
        this.onRejectedFns.forEach(onRejected => onRejected(this.reason))
      })
    }
  }

  then(onFulfilled, onRejected) {
    // 1. promise 状态已经稳定
    return new JzPromise((resolve, reject) => {
      if(typeof onFulfilled === 'function' && this.status === STATUS_FULFILLED) {
        const value = onFulfilled(this.value)
        resolve(value)
      }
      if(typeof onRejected === 'function' && this.status === STATUS_REJECTED) {
        const reason = onRejected(this.reason)
        resolve(reason)
      }
      // promise 状态为 pending，收集回调函数
      if(this.status === STATUS_PENDING) {
        if(typeof onFulfilled === 'function') {
          this.onFulfilledFns.add((value) => {
            const result = onFulfilled(value)
            resolve(result)
          })
        }
        if(typeof onRejected === 'function') {
          this.onRejectedFns.add(onRejected)
        }
      }
    })

  }
}

console.log('start')

const promise = new JzPromise((resolve, reject) => {
  console.log(2)
  resolve('success')
  reject('error')
  console.log(3)
})

promise.then(res => {
  console.log('res1: ', res)
}, err => {
  console.log('err1: ', err)
})

promise.then(res => {
  console.log('res2: ', res)
}, err => {
  console.log('err2: ', err)
})

setTimeout(() => {
  promise.then(res => {
    console.log('res3: ', res)
  }, err => {
    console.log('err3: ', err)
  })
}, 1000)

console.log('end')


