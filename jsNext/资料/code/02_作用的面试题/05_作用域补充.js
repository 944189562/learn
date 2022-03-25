function foo() {
  m = 100 // 特殊处理，提升到全局对象GO上
}

foo()
console.log(m)

// GO: { foo: 0xa00 }
// AO: {  }