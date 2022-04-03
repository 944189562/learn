// 依赖收集
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

// 获取对应属性依赖
const targetMap = new WeakMap()

function getDepend(target, key) {
  let objMap = targetMap.get(target)
  if (!objMap) {
    objMap = new Map()
    targetMap.set(target, objMap)
  }

  let depend = objMap.get(key)
  if (!depend) {
    depend = new Depend()
    objMap.set(key, depend)
  }

  return depend
}

const obj = {
  name: 'jz',
  age: 18
}

const info = {
  address: 'shanghai'
}

// 数据响应式
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    const depend = getDepend(target, key)
    depend.notify()
  }
})

watchFn(function () {
  console.log('变化了')
})

objProxy.name = 'zs'
objProxy.age = 25
objProxy.address = 'shanghai'