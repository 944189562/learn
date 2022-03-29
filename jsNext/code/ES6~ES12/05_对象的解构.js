var obj = {
  name: 'jz',
  age: 18,
  height: 188
}

var {name, age, height}  = obj
console.log(name, age, height)

var {age} = obj
console.log(age)

var {name: newName} = obj
console.log(newName)

var {address = 'test'} = obj

console.log(address)

function foo(obj) {

}
// 函数参数解构
function bar({name, age}) {

}