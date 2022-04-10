function throttle(fn, wait, options = {leading: true, trailing: false}) {
  let lastTime = 0
  const {leading, trailing} = options
  let timer = null

  const _throttle = function (...args) {
    const nowTime = new Date().getTime()
    lastTime = !lastTime && !leading ? nowTime : lastTime
    const remainTime = wait - (nowTime - lastTime)

    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      fn.apply(this, args)
      lastTime = nowTime
      return
    }

    if (trailing && !timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        lastTime = !leading ? 0 : new Date().getTime()
        timer = null
      }, remainTime)
    }
  }

  _throttle.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    lastTime = 0
  }

  return _throttle
}

// throttle(fn, wait, {leading, trailing})