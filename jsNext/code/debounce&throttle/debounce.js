function debounce(fn, delay, immediate = false, callback) {
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

// function debounce(fn, wait, immediate = false, callback) {
//   let timer = null
//   let isInvoke = false
//   let _args = null
//   let _this = null
//
//   const execFn = (_this, _args) => {
//     const result = fn.apply(_this, _args)
//     callback && callback(result)
//     _this = null
//     _args = null
//   }
//
//   const _debounce = function (...args) {
//     _this = this
//     _args = args
//     if (immediate && !isInvoke) {
//       isInvoke = true
//       execFn(_this, _args)
//     } else {
//       if (timer) clearTimeout(timer)
//       timer = setTimeout(() => {
//         timer = null
//         isInvoke = false
//         execFn(_this, _args)
//       }, wait)
//     }
//   }
//
//   return _debounce
// }