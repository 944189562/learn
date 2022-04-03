const obj = {
  name: 'jz',
  age: 18
}

setTimeout(() => {
  obj.name = 'zs'
}, 1000)

module.exports = obj