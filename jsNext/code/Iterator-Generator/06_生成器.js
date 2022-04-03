function* foo() {
  console.log('start')

  const value1 = 1
  console.log(value1)
  yield

  const value2 = 2
  console.log(value2)
  yield

  console.log('end')
}

// 但调用生成器函数时，会返回Generator
const generator = foo()

generator.next()
generator.next()
generator.next()