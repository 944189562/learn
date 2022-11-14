export default function throttle(fn, wait, options = { leading: false, trailing: false }) {
  let lastTime = 0
  const { leading, trailing } = options
  let timer = null

  const _throttle = function (...args) {
    const nowTime = new Date().getTime()
    if (!lastTime && !leading) lastTime = nowTime
    const remainTime = wait - (nowTime - lastTime)
    if (remainTime <= 0) {
      console.log('remainTIme')
      if (timer) {
        clearTimeout(time)
        timer = null
      }
      fn.apply(this, args)
      lastTime = nowTime
      return
    }

    if (trailing && !timer) {
      timer = setTimeout(() => {
        console.log('timer')
        timer = null
        fn.apply(this, args)
        lastTime = !leading ? 0 : new Date().getTime()
      }, remainTime)
    }
  }

  return _throttle
}