const _ = require('lodash')

const reverse = array => array.reverse()
const first = array => array[0]
const toUpper = str => str.toUpperCase()

const last = _.flowRight(toUpper, first, reverse)

// console.log(last(['one', 'two', 'three']))

// function compose(...args){
//     return function(value){
//         return args.reverse().reduce(function(acc, fn) {
//             return fn(acc)
//         },value)
//     }
// }

const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value)
const last1 = compose(toUpper, first, reverse)
console.log(last1(['one', 'two', 'three']))