// 防抖，一段时间内连续触发多次，只会执行最后一次
function debounce(fn, delay = 500) {
  let timer = null
  return function(...args) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
// 节流，每隔一段时间执行一次
function throttle(fn, delay=500) {
  let oldTime = Date.now()
  return function(...agrs) {
    let newTime = Date.now()
    if(newTime -oldTime > delay) {
      fn.apply(this, args)
      oldTime = Date.now()
    }
  }
}

function throttle(fn, delay = 500) {
  let timer = null 
  return function(...args) {
    if(timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    })
  }
}