const names = ['jz', 'zs', 'ls']
const name = 'nbz'
const info = {
  name: 'jz',
  age: 18
}

function foo(x, y, z) {
  console.log(x, y, z)
}

// foo.apply(null, names)

// jz zs ls
foo(...names)
// n b z
foo(...name)

const newNames = [...names, ...name]
// [ 'jz', 'zs', 'ls', 'n', 'b', 'z' ]
console.log(newNames)

// {
//   '0': 'jz',
//   '1': 'zs',
//   '2': 'ls',
//   name: 'jz',
//   age: 18,
//   address: 'shanghai'
// }
const obj = { ...info, address: 'shanghai', ...names}
console.log(obj)

// TypeError: obj is not iterable
const newArray = [...obj]
console.log(newArray)