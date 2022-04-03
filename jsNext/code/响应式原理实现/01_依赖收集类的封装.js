class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => fn())
  }
}

const depend = new Depend()

function watchFn(fn) {
  depend.addDepend(fn)
}

const obj = {
  name: 'jz',
  age: 18
}

// 数据响应式
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    depend.notify()
  }
})

watchFn(function() {
  console.log('变化了')
})

objProxy.name = 'zs'
objProxy.age = 25
objProxy.address = 'shanghai'