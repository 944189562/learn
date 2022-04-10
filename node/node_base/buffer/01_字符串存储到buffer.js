const message = 'Hello'

// 方式一
const buffer = new Buffer(message)
console.log(buffer)

// 方式二
const buffer1 = Buffer.from(message)
console.log(buffer1)
// <Buffer 48 65 6c 6c 6f>