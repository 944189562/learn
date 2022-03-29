function foo(...args) {
  console.log(args)
}

const name = 'jz'
const age = 18

// [ [ 'Hello ', ' World ', '' ], 'jz', 18 ]
foo `Hello ${name} World ${age}`