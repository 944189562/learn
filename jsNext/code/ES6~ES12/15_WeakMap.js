const weakMap = new WeakMap()

weakMap.set({}, 'aaa')

console.log(weakMap)

// WeakMap 的使用场景，Vue 响应式
const obj = {
  name: 'jz',
  age: 18
}

function objNameFn1() {
  console.log('objNamesFn1 执行')
}

function objNameFn2() {
  console.log('objNamesFn2 执行')
}

const targetMap = new WeakMap()
const depsMap = new Map()
depsMap.set('name', [objNameFn1, objNameFn2])
targetMap.set(obj, depsMap)

// 监听 obj 属性变化
obj.name = 'why'
const target = targetMap.get(obj)
const cbs = target.get('name').forEach(cb => cb())
