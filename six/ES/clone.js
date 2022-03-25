function shallowClone(obj) {
  let newObj = {}
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop]
    }
  }

  return newObj
}

let obj = {
  name: 'Bob',
  age: 18
}

console.log(shallowClone(obj))

function deepClone(obj) {

}