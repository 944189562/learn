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

    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (err) {
      this.reject(err)
    }
  }

  resolve(value) {
    if (this.status === STATUS_PENDING) {
      // 添加微任务
      queueMicrotask(() => {
        if (this.status !== STATUS_PENDING) return
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
        if (this.status !== STATUS_PENDING) return
        console.log('reject')
        this.status = STATUS_REJECTED
        this.reason = reason
        this.onRejectedFns.forEach(onRejected => onRejected(this.reason))
      })
    }
  }

  then(onFulfilled, onRejected) {
    return new JzPromise((resolve, reject) => {
      // 1. promise 状态已经稳定
      if (typeof onFulfilled === 'function' && this.status === STATUS_FULFILLED) {
        // try {
        //   const value = onFulfilled(this.value)
        //   resolve(value)
        // } catch (err) {
        //   reject(err)
        // }
        JzPromise.execFuncWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (typeof onRejected === 'function' && this.status === STATUS_REJECTED) {
        // try {
        //   const reason = onRejected(this.reason)
        //   resolve(reason)
        // } catch (err) {
        //   reject(err)
        // }
        JzPromise.execFuncWithCatchError(onRejected, this.reason, resolve, reject)
      }
      // promise 状态为 pending，收集回调函数
      if (this.status === STATUS_PENDING) {
        if (typeof onFulfilled === 'function') {
          this.onFulfilledFns.add(() => {
            // try {
            //   const value = onFulfilled(this.value)
            //   resolve(value)
            // } catch (err) {
            //   reject(err)
            // }
            JzPromise.execFuncWithCatchError(onFulfilled, this.value, resolve, reject)
          })
        }
        if (typeof onRejected === 'function') {
          this.onRejectedFns.add(() => {
            // try {
            //   const reason = onRejected(this.reason)
            //   resolve(reason)
            // } catch (err) {
            //   reject(err)
            // }
            JzPromise.execFuncWithCatchError(onRejected, this.reason, resolve, reject)
          })
        }
      }
    })
  }

  static execFuncWithCatchError(handler, value, resolve, reject) {
    try {
      const result = handler(value)
      resolve(result)
    } catch (err) {
      reject(err)
    }
  }
}

console.log('start')

const promise = new JzPromise((resolve, reject) => {
  console.log(2)
  // resolve('success')
  reject('error')
  console.log(3)
})

promise.then(res => {
  console.log('res1: ', res)
  // throw new Error('res1 error')
  return 'aaa'
}, err => {
  console.log('err1: ', err)
  throw new Error('res1 error')
  return 'bbb'
}).then(res => {
  console.log('res2: ', res)
}, err => {
  console.log('err2: ', err)
})

console.log('end')


