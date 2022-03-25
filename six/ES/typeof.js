typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'

function getType(obj) {
  let type = typeof obj;
  if(type !== 'object'){
    return type
  }

  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
}