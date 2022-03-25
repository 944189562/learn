class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    // data中的属性名称
    this.key = key
    // 回调函数负责处理更新视图
    this.cb = cb
    // 把watcher对象记录到Dep类的静态属性
    Dep.target = this
    // 触发getter方法，在getter方法中调用addSub
    this.oldValue = vm[key]
    Dep.target = null
  }

  // 当数据发生变化时更新视图
  update() {
    let newValue = this.vm[this.key]
    if (newValue === this.oldValue) {
      return
    }

    this.cb(newValue)
  }
}