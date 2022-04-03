const obj = {
  name: 'jz',
  age: 18
}

console.log(Object.values(obj)) // [ 'jz', 18 ]
console.log(Object.keys(obj)) // [ 'name', 'age' ]
console.log(Object.entries(obj)) // [ [ 'name', 'jz' ], [ 'age', 18 ] ]
console.log(Object.getOwnPropertyDescriptor(obj, 'name')) // { value: 'jz', writable: true, enumerable: true, configurable: true }

/*
* {
  name: { value: 'jz', writable: true, enumerable: true, configurable: true },
  age: { value: 18, writable: true, enumerable: true, configurable: true }
}
*/
console.log(Object.getOwnPropertyDescriptors(obj))
