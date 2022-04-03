const obj = {
  _name: 'jz',
  age: 18,
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

const handler = {
  get(target, key, receiver) {
    console.log(`get ${key}: ${target[key]}`)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.log(`set ${key}: ${value}`)
    Reflect.set(target, key, value, receiver)
  }
}

const objProxy = new Proxy(obj, handler)

objProxy.name = 'zs'
objProxy.age = 28

console.log(objProxy.name)
console.log(obj, objProxy)
