var a = 100

function foo() {
  console.log(a) // undefined
  return
  var a = 200
}

foo()

// GO: { a: undefined, foo: 0xa00}
// AO: { a: undefined }
