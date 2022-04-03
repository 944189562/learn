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

// 封装一个响应式的函数
// 全局变量 保存fn
let activeReactiveFn = null

function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
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
    // 收集依赖
    const depend = getDepend(target, key)
    depend.addDepend(activeReactiveFn)
    console.log(depend.reactiveFns.length)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    const depend = getDepend(target, key)
    depend.notify()
  }
})

watchFn(function () {
  console.log('name 变化了')
  console.log(objProxy.name) // 触发getter 收集依赖
})

watchFn(function() {
  console.log('age update')
  console.log(objProxy.age) // 触发getter 收集依赖
})

console.log('data update -------')
objProxy.name = 'zs'
// objProxy.age = 25
// objProxy.address = 'shanghai'