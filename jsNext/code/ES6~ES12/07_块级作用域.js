// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000)
// }
//
// for (var i = 0; i < 5; i++) {
//   (function (n) {
//     setTimeout(() => console.log(n), 1000)
//   })(i)
// }
//
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000)
// }

var foo = 'foo'

if(true) {
  console.log(foo) // ReferenceError: Cannot access 'foo' before initialization

  let foo = 'bar'
}