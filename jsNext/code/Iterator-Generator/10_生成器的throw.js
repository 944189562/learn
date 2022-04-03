function* foo(num) {
  console.log('start')

  const value1 = 1 + num
  console.log('value1 => ', value1)
  let x = 0
  try {
    x = yield value1 + 1
  } catch (err) {
    console.log('捕获到异常', err)
  }

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

const result = generator.next()
if (result.value !== 6) {
  console.log(generator.throw(5))
}

/*
  start
  value1 =>  6
  捕获到异常 5
  value2 =>  2
  { value: 2, done: false }

 */


