function some(arr, fn) {
  for(let i = 0, length = arr.length; i < length; i++) {
    if (fn(arr[i], i, arr)) {
      return true
    }
  }
  return false
}

function every(arr, fn) {
  for(let i = 0, length = arr.length; i < length; i++) {
    if (!fn(arr[i], i, arr)) {
      return false
    }
  }
  return true
}

const arr = [1, 2, 3]

// const res = some(arr, (value, index, arr) => {
//   return value > 2
// })

const res = every(arr, (value, index, arr) => {
  return value > 0
})

console.log(res)