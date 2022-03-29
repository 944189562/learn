Function.prototype.myCall = function (thisArg, ...args) {
  const fn = this
  const ctx = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
  const key = Symbol('key')
  ctx[key] = fn
  const result = ctx[key](...args)
  delete ctx[key]
  return result
}

function foo(name, age) {
  console.log(name, age, this)
}

// foo.call({}, 'jz') // 'jz'
//
// foo.myCall({}, 'Tom')
// foo.myCall(2, 'tom')

Function.prototype.myApply = function (thisArg, argsArr = []) {
  const fn = this
  const arr = [null, undefined]
  const ctx = arr.indexOf(thisArg) === -1 ? Object(thisArg) : globalThis
  const key = Symbol('key')
  ctx[key] = fn
  const result = ctx[key](...argsArr)
  delete ctx[key]
  return result
}

// foo.apply({}, ['apply'])
// foo.apply('aaa', ['test'])
// foo.myApply({}, ['myApply'])
// foo.myApply('aaa', ['test'])

var obj = {
  name: 'jz',
  age: 18
}
var bar = foo.bind(obj, 'Tom')
bar(18, 'test')
var obj1 = new bar(18, 'jz')

Function.prototype.myBind = function (thisArg, ...args) {
  const fn = this
  const arr = [null, undefined]
  const ctx = arr.indexOf(thisArg) === -1 ? Object(thisArg) : globalThis
  const key = Symbol('key')
  function proxyFn(...args1) {
    if(this instanceof proxyFn) {
      fn.apply(this, [...args, ...args1])
    } else {
      fn.apply(ctx, [...args, ...args1])
    }
  }
  proxyFn.prototype = fn.prototype

  return proxyFn
}

var bar = foo.myBind(obj, 'Tom')
bar(18, 'test')
var obj1 = new bar(18, 'jz')