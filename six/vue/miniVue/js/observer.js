class Observer {
  constructor(data) {
    this.walk(data)
  }

  walk(data) {
    // 1. 判断data是否为对象
    if (!data || typeof data !== 'object') {
      return
    }
    // 2. 遍历对象所有属性
    Object.keys(data).forEach(key => {
      // 响应式数据
      this.defineReactive(data, key, data[key])
    })
  }

  defineReactive(obj, key, val) {
    const _this = this
    // 负责收集以来，并发送通知
    let dep = new Dep()
    // 如果val是对象，把val内部的属性转换成响应式
    this.walk(val)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        // 收集依赖
        Dep.target && dep.addSub(Dep.target)
        // return obj[key] 会造成回调地狱
        // val 此处为闭包，扩展了val变量的作用域，没有被释放
        return val
      },
      set(newValue) {
        if (newValue === val) {
          return
        }

        val = newValue
        _this.walk(newValue)
        // 发送通知
        dep.notify()
      }
    })
  }
}