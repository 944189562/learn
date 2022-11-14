const message = 'Hello'

// 方式一
// const buffer = new Buffer(message, 'utf16le')
// console.log(buffer)

// 方式二
const buffer1 = Buffer.from(message)
console.log(buffer1)
// <Buffer 48 65 6c 6c 6f>
// console.log(buffer1.length)
// console.log(buffer1.toString())

for(const item of buffer1) {
  console.log(item)
}