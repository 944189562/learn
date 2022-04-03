const obj = {
  name: 'jz',
  age: 18
}

Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      console.log('get key => ', value)
      return value
    },
    set(newValue) {
      if(newValue === value) return
      value = newValue
      console.log('set key => ', value)
    }
  })
})

obj.name = 'zs'

console.log(obj.name)