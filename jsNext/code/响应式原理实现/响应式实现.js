let activeReactiveFn = null

// 管理依赖
class Depend {
  constructor() {
    // Set 防止重复添加更新函数
    this.reactiveFns = new Set()
  }

  addDep(fn) {
    this.reactiveFns.add(fn)
  }

  depend() {
    if (!activeReactiveFn) return
    this.addDep(activeReactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => fn())
  }
}

const targetMap = new WeakMap()
// 依赖收集数据对象封装
function getDepend(target, key) {
  let objMap = targetMap.get(target)
  if (!objMap) {
    objMap = new Map()
    targetMap.set(target, objMap)
  }

  let depMap = objMap.get(key)
  if (!depMap) {
    depMap = new Depend()
    objMap.set(key, depMap)
  }

  return depMap
}

// 收集依赖函数
class Watcher {
  constructor(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
  }
}

// 数据响应式
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      const dep = getDepend(target, key)
      dep.depend()
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver)
      const dep = getDepend(target, key)
      dep.notify()
    }
  })
}

let obj = {
  name: 'jz',
  age: 18
}

const objProxy = reactive(obj)

// 初始化收集依赖
new Watcher(function () {
  console.log('start')
  console.log(objProxy.name, 'get name')
  console.log(objProxy.name, 'get name')
  console.log(objProxy.name, 'get name')
  console.log('end')
})

console.log('data update')
objProxy.name = 'll'
