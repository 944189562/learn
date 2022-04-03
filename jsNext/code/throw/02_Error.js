function foo() {
  const err = new Error('test')

  console.log(err.message)
  console.log(err.name)
  console.log(err.stack)
}

function bar() {
  foo()
}

function baz() {
  bar()
}

baz()