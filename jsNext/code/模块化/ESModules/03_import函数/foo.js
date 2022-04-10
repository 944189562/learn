let foo = 'foo'
setTimeout(() => {
  foo = 'bar'
}, 1000)
// 第一种方式
// export default foo

// 第二种方式
export {
  foo as default
}