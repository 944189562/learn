function* foo() {
  console.log('start')

  // return 会使生成器结束
  // return 10

  const value1 = 1
  console.log('value1 => ', value1)
  yield value1 + 1

  const value2 = 2
  console.log('value2 => ', value2)
  yield value2

  const value3 = 3
  console.log('value3 => ', value3)
  yield value3

  console.log('end')
  // 生成器结束 done为true，value为123
  return 123
}

// 但调用生成器函数时，会返回Generator，生成器是一个特殊的迭代器
const generator = foo()

console.log('返回值 =>', generator.next())
console.log('返回值 =>', generator.next())
console.log('返回值 =>', generator.next())
console.log('返回值 =>', generator.next())

