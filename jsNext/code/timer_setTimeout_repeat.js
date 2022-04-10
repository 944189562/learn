class Timer {
  constructor() {
    this.func = null
    this.timerID = null
  }

  repeat(func, ms) {
    if (this.func === null) {
      this.func = func
    }
    if (this.func !== func) {
      return
    }

    this.timerID = setTimeout(() => {
      func()
      this.repeat(func, ms)
    }, ms)
  }

  clear() {
    this.timerID && clearTimeout(this.timerID)
  }
}

const timer = new Timer()

const a = () => console.log('a')
const b = () => console.log('b')

timer.repeat(a, 1000)
timer.repeat(b, 1000)