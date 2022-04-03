const date = new Date()
const registry = new FinalizationRegistry(value => {
  console.log((new Date() - date) / 1000)
  console.log('对象被销毁了', value)
})

let obj = {}
let info = {}

registry.register(obj, 'obj')
registry.register(obj, 'info')

obj = null
info = null