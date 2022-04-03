const date = new Date()
const registry = new FinalizationRegistry(value => {
  console.log((new Date() - date) / 1000)
  console.log('对象被销毁了', value)
})

let obj = {
  name: 'jz'
}
// let info = obj // 强引用，不会被 GC回收

// let info = new WeakSet()
// info.add(obj) // 若引用，当 obj 为null，被GC回收

// 弱引用，创建一个 WeakRef 对象
let info = new WeakRef(obj)
// deref() 获取到原对象，原对象被销毁为undefined
info.deref()
console.log(info.deref().name)

registry.register(obj, 'obj')

obj = null
