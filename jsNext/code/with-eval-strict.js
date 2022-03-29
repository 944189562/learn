let message = 'Hello World'
let age = 18
const obj = {
  message: 'obj msg'
}
with(obj) {
  //
  console.log(age)
}

eval()