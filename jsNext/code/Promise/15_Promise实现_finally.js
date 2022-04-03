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
    onFulfilled = onFulfilled || (value => value)
    onRejected = onRejected || (err => {
      throw err
    })

    return new JzPromise((resolve, reject) => {
      // 1. promise 状态已经稳定
      if (typeof onFulfilled === 'function' && this.status === STATUS_FULFILLED) {
        JzPromise.execFuncWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (typeof onRejected === 'function' && this.status === STATUS_REJECTED) {
        JzPromise.execFuncWithCatchError(onRejected, this.reason, resolve, reject)
      }
      // promise 状态为 pending，收集回调函数
      if (this.status === STATUS_PENDING) {
        if (typeof onFulfilled === 'function') {
          this.onFulfilledFns.add(() => {
            JzPromise.execFuncWithCatchError(onFulfilled, this.value, resolve, reject)
          })
        }
        if (typeof onRejected === 'function') {
          this.onRejectedFns.add(() => {
            JzPromise.execFuncWithCatchError(onRejected, this.reason, resolve, reject)
          })
        }
      }
    })
  }

  /*
  * catch 实现思路，catch调用 then来执行rejected
  * 上一个promise rejected，then没有第二个失败回调，判断 typeof onRejected !== 'function'，then不会往下执行
  * 所以给 onRejected 设置初始值值，然后抛出异常，then 返回新 promise 可以用 catch 来接收 上次promise的结果
  * onRejected = onRejected || (err => {
  *   throw err
  * })
  * */

  // catch 实现思路接收上一个 promise 返回的结果，抛出异常
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  // finally 的实现
  finally(onFinally) {
    this.then(() => {
      onFinally()
    }, () => {
      onFinally()
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
  resolve('resolved')
  // reject('rejected')
  // throw new Error('error')
  console.log(3)
})

promise
  .then(res => {
    console.log('res1: ', res)
    // throw new Error('res1 error')
    return 'aaa'
  })
  .then(res => {
    console.log('res2: ', res)
  })
  .catch(err => console.log('err: ', err))
  .finally(() => console.log('finally'))

console.log('end')


