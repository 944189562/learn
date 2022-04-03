// 保存当前需要收集的响应式函数
let activeReactiveFn = null

// 依赖收集
/*
* Depend 优化
* 1> depend 方法，不暴露内部方法
* 2> 使用Set来保存依赖函数，而不是数组，去重
* */
class Depend {
  constructor() {
    // 使用 Set
    this.reactiveFns = new Set()
  }

  addDepend(reactiveFn) {
    this.reactiveFns.add(reactiveFn)
  }

  depend() {
    if (activeReactiveFn) {
      this.addDepend(activeReactiveFn)
    }
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

function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 数据响应式
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      // 收集依赖
      const dep = getDepend(target, key)
      dep.depend()
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver)
      const depend = getDepend(target, key)
      depend.notify()
    }
  })
}

const obj = {
  name: 'jz',
  age: 18
}

const info = {
  address: 'shanghai'
}

// 数据响应式
const objProxy = reactive(obj)
const infoProxy = reactive(info)

watchFn(function() {
  console.log(infoProxy.address)
})

console.log('date update')

infoProxy.address = 'beijing'
