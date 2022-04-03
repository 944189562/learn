const obj = {
  name: 'jz',
  age: 18
}

const handler = {
  get(target, key, reciver) {
    console.log(`get ${key}: ${target[key]}`)
    return target[key]
  },
  set(target, key, value, revicer) {
    console.log(`set ${key}: ${value}`)
    target[key] = value
  }
}

const objProxy = new Proxy(obj, handler)

objProxy.name = 'zs'
objProxy.age = 28

console.log(objProxy.name)
console.log(obj, objProxy)
