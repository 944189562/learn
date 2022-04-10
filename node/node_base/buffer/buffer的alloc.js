// 通过alloc创建buffer
const buffer = Buffer.alloc(8) // 创建8个字节的buffer
console.log(buffer)
//<Buffer 00 00 00 00 00 00 00 00>

buffer[0] = 88
buffer[1] = 0x88
console.log(buffer)
// <Buffer 58 88 00 00 00 00 00 00>