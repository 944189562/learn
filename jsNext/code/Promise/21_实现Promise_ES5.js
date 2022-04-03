// 定义Promise 状态
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function JzPromise(executor) {
  this.status = PROMISE_STATUS_PENDING
  this.value = undefined
  this.reason = undefined
  this.onFulfilledFns = []
  this.onRejectedFns = []

  try {
    executor(resolve.bind(this), reject.bind(this))
  } catch (err) {
    reject.call(this, err)
  }
}

JzPromise.prototype.then = function (onFulfilled, onRejected) {
  return new JzPromise((resolve, reject) => {
    // 1. 设置初始值
    onFulfilled = onFulfilled || function (value) {
      return value
    }
    onRejected = onRejected || function (reason) {
      throw reason
    }
    // 2. 判断 promise 状态
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(function (value) {
        execFnCatchError(onFulfilled, value, resolve, reject)
      })
      this.onRejectedFns.push(function (reason) {
        execFnCatchError(onRejected, reason, resolve, reject)
      })
    }
    if (this.status === PROMISE_STATUS_FULFILLED) {
      execFnCatchError(onFulfilled, this.value, resolve, reject)
    }
    if (this.status === PROMISE_STATUS_REJECTED) {
      execFnCatchError(onRejected, this.reason, resolve, reject)
    }
  })
}

JzPromise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}

JzPromise.prototype.finally = function (onFinally) {
  return this.then(function (value) {
    onFinally()
    return value
  }, function (reason) {
    onFinally()
    throw reason
  })
}

function resolve(value) {
  execFnUpdateStatus.call(this, PROMISE_STATUS_FULFILLED, value, this.onFulfilledFns)
}

function reject(reason) {
  execFnUpdateStatus.call(this, PROMISE_STATUS_REJECTED, reason, this.onRejectedFns)
}

function execFnUpdateStatus(status, value, fns) {
  if (this.status === PROMISE_STATUS_PENDING) {
    queueMicrotask(() => {
      if (this.status !== PROMISE_STATUS_PENDING) {
        return
      }
      this.status = status
      if (this.status === PROMISE_STATUS_FULFILLED) {
        this.value = value
      } else if (this.status === PROMISE_STATUS_REJECTED) {
        this.reason = value
      }
      fns.forEach(function (onRejected) {
        onRejected(value)
      })
    })
  }
}

function execFnCatchError(handler, value, resolve, reject) {
  try {
    const result = handler(value)
    resolve(result)
  } catch (err) {
    reject(err)
  }
}

const promise = new JzPromise((resolve, reject) => {
  console.log('pending')
  throw new Error('error')
  resolve('success')
  reject('error')
})

console.log('start ------')

promise
  .finally(() => console.log('finally'))
  .then(res => {
    console.log('fulfilled1 => ', res)
  })
  .catch(err => {
    console.log(err)
    return 'catch'
  })
  .then(res => {
    console.log('fulfilled2 => ', res)
  }, err => {
    console.log('rejected2 => ', err)
  })

console.log('end --------')
