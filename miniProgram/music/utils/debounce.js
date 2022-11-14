export default function debounce(fn, delay, immediate = false, callback) {
  let timer = null
  let isInvoke = false

  const _debounce = function (...args) {
    console.log(args)
    return new Promise(resolve => {
      if (timer) clearTimeout(timer)

      if (immediate && !isInvoke) {
        isInvoke = true
        const result = fn.apply(this, args)
        callback && callback(result)
        resolve(result)
      } else {
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          callback && callback(result)
          resolve(result)
          isInvoke = false
        }, delay)
      }
    })
  }

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}