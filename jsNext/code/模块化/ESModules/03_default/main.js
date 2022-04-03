// import 返回一个 promise 实例
// import('./foo.js').then((foo) => {
//   console.log(foo)
// })

let foo = await import('./foo.js')
console.log(foo)