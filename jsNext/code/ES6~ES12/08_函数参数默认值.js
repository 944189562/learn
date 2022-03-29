function foo(x, y, z = 20, m, n) {
  console.log(x, y, z)
}

console.log(foo.length) // 2

function bar(a, ...args) {
  console.log(a, args)
}

bar(1, 2, 3, 4)

let baz = () => {
  console.log('baz')
}

// undefined
console.log(baz.prototype)

// TypeError: baz is not a constructor
var f = new baz()