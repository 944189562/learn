function foo() {
  throw new Error('test')
}

function bar() {
  try {
    foo()
  } catch (err) {
    console.log('err => ', err.message)
  } finally {
    console.log('finally')
  }
}

bar()