const set1 = new Set()

set1.add(1)
set1.add(2)
set1.add({})

// console.log(set1.has(1))
// console.log(set1.size)
// console.log(set1.delete(1))
// console.log(set1.clear())

console.log(set1) // Set(2) { 1, 2, {} }

const set2 = new Set([1, 2, 3])
console.log(set2) // Set(3) { 1, 2, 3 }

const arr1 = [...set2]

const arr2 = Array.from(set2)
console.log(arr1, arr2) // [ 1, 2, 3 ] [ 1, 2, 3 ]

const arr = [1, 2, 3, 45, 1, 12, 21, 5, 2, 12, 12]
console.log(new Set(arr)) // Set(7) { 1, 2, 3, 45, 12, 21, 5 }