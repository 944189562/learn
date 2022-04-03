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
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        const dep = getDepend(obj, key)
        dep.depend()
        return value
      },
      set(newValue) {
        value = newValue
        const dep = getDepend(obj, key)
        dep.notify()
      }
    })
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
reactive(obj)
reactive(info)

watchFn(function() {
  console.log(info.address)
  console.log(info.address)
})

console.log('date update')

info.address = 'beijing'
