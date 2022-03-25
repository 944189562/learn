function myNew(func, ...args) {
  // 1. 创建一个对象
  const obj = {}

  // 2. 把对象的原型指向构造函数原型对象
  obj.__proto__ = fucn.prototype

  // 3. 将构造函数的this指向新对象
  let result = func.apply(obj, ...args)

  // 4. 根据返回值判断
  return result instanceof Object ? result : obj
}