function debounce(fn, wait, immediate = false) {
  let timer = null
  let isInvoke = false

  const _debounce = function (...args) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    if (immediate && !isInvoke) {
      fn.apply(this, args)
      isInvoke = true
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        isInvoke = false
      }, wait)
    }
  }

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}

// debounce(fn, wait, immediate)