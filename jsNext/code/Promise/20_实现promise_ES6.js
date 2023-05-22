// 定义Promise 状态
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class JzPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
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
    JzPromise.execFnUpdateStatusAndExecutionCallback.call(this, PROMISE_STATUS_FULFILLED, value)
  }

  reject(reason) {
    JzPromise.execFnUpdateStatusAndExecutionCallback.call(this, PROMISE_STATUS_REJECTED, reason)
  }

  then(onFulfilled, onRejected) {
    return new JzPromise((resolve, reject) => {
      JzPromise.execFnWithThen.call(this, onFulfilled, onRejected, resolve, reject)
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    return this.then((value) => {
      onFinally()
      return value
    }, (err) => {
      onFinally()
      throw err
    })
  }

  static resolve(value) {
    return new JzPromise((resolve, reject) => {
      resolve(value)
    })
  }

  static reject(value) {
    return new JzPromise((resolve, reject) => {
      reject(value)
    })
  }

  static all(promises = []) {
    return new JzPromise((resolve, reject) => {
      const results = []
      promises.forEach(promise => {
        // results 顺序可能不一致
        promise.then(res => {
          results.push(res)
          JzPromise.execFnLengthResolve(results, promises, resolve)
        }, reject)
      })
    })
  }

  static allSettled(promises = []) {
    return new JzPromise((resolve, reject) => {
      const results = []
      promises.forEach(promise => {
        promise.then(res => {
          results.push({
            status: 'fulfilled',
            value: res
          })
          JzPromise.execFnLengthResolve(results, promises, resolve)
        }, err => {
          results.push({
            status: 'rejected',
            reason: err
          })
          JzPromise.execFnLengthResolve(results, promises, resolve)
        })
      })
    })
  }

  static race(promises = []) {
    return new JzPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(resolve, reject)
      })
    })
  }

  static any(promises = []) {
    return new JzPromise((resolve, reject) => {
      const results = []
      promises.forEach(promise => {
        promise.then(resolve, err => {
          results.push(err)
          if (results.length === promises.length) {
            reject(new AggregateError('All promises were rejected]'))
          }
        })
      })
    })
  }

  static execFnWithThen(onFulfilled, onRejected, resolve, reject) {
    // 设置初始值
    onFulfilled = onFulfilled || (value => value)
    onRejected = onRejected || (reason => {
      throw reason
    })

    // 判断状态
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.add((value) => {
        JzPromise.execFnCatchError(onFulfilled, value, resolve, reject)
      })
      this.onRejectedFns.add((reason) => {
        JzPromise.execFnCatchError(onRejected, reason, resolve, reject)
      })
    }

    if (this.status === PROMISE_STATUS_FULFILLED) {
      JzPromise.execFnCatchError(onFulfilled, this.value, resolve, reject)
    }

    if (this.status === PROMISE_STATUS_REJECTED) {
      JzPromise.execFnCatchError(onRejected, this.reason, resolve, reject)
    }
  }

  static execFnUpdateStatusAndExecutionCallback(status, value, cbFns) {
    if (this.status === PROMISE_STATUS_PENDING) {
      queueMicrotask(() => {
        if (this.status !== PROMISE_STATUS_PENDING) return
        this.status = status
        if (this.status === PROMISE_STATUS_FULFILLED) {
          this.value = value
          this.onFulfilledFns.forEach(onFulfilled => onFulfilled(value))
        } else if (this.status === PROMISE_STATUS_REJECTED) {
          this.reason = value
          this.onRejectedFns.forEach(onFulfilled => onFulfilled(value))
        }
      })
    }
  }

  static execFnCatchError(handler, value, resolve, reject) {
    try {
      resolve(handler(value))
    } catch (err) {
      reject(err)
    }
  }

  static execFnLengthResolve(results, promises, resolve) {
    if (results.length === promises.length) {
      resolve(results)
    }
  }
}

const promise = new JzPromise((resolve, reject) => {
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
    throw new Error('res1 error')
  })
  .catch(err => {
    console.log(err)
    return 'catch'
  })
  .then(res => console.log('res2: ', res), err => console.log('err2: ', err))

console.log('结束')

// JzPromise.resolve(1).then(res => console.log(res))
//
// JzPromise.reject(1).catch(err => console.log(err))

const p1 = new JzPromise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})

const p2 = new JzPromise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000)
})

const p3 = new JzPromise((resolve, reject) => {
  setTimeout(() => reject(3), 500)
})

// JzPromise
//   .all([p1, p2, p3])
//   .then(res => console.log('fulfilled: ', res))
//   .catch(err => console.log('rejected: ', err))

// JzPromise
//   .allSettled([p1, p2, p3])
//   .then(res => console.log('fulfilled: ', res))
//   .catch(err => console.log('rejected: ', err))

JzPromise
  .race([p1, p2, p3])
  .then(res => console.log('fulfilled: ', res))
  .catch(err => console.log('rejected: ', err))
