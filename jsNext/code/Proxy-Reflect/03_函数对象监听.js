function foo() {

}

const fooProxy = new Proxy(foo, {
  apply(target, thisArg, otherArgs) {
    console.log('apply')
    return target.apply(thisArg, otherArgs)
  },
  construct(target, argArray, newTarget) {
    console.log('new')
    return new target(...argArray)
  }
})

fooProxy()
new fooProxy()
fooProxy.apply({})