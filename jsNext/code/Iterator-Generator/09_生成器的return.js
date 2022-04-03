function* foo(num) {
  console.log('start')

  // return 会使生成器结束
  // return 10

  const value1 = 1 + num
  console.log('value1 => ', value1)
  const x = yield value1 + 1

  const value2 = 2 + x
  console.log('value2 => ', value2)
  const y = yield value2

  const value3 = 3 + y
  console.log('value3 => ', value3)
  yield value3

  console.log('end')
  // 生成器结束 done为true，value为123
  return 123
}

// 但调用生成器函数时，会返回Generator，生成器是一个特殊的迭代器
const generator = foo(5)

console.log(generator.next())
console.log(generator.return(15))

/*
start
value1 =>  6
{ value: 7, done: false }
{ value: 15, done: true }
*/


