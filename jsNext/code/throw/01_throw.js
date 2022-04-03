function foo(type) {
  console.log('start')
  if (type === 0) {
    // 1.抛出基本数据类型 string
    // throw 'type is not 0'

    // 2. 抛出对象
    // throw {
    //   errorCode: -1001,
    //   errormessage: 'type is not 0'
    // }

    // 3. 创建类，并且创建这个类对应的对象
    // throw new JzError(-1, 'type is not 0')

    // 4. 使用内置 Error 类
    throw new Error('type is not 0')
  }
  console.log('end')
}

class JzError {
  constructor(code, msg) {
    this.code = code
    this.msg = msg
  }
}

foo(0)