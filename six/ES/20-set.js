// set 集合 不重复的值

const s = new Set()

s.add(1).add(2).add(3).add(2)

// console.log(s)

// s.forEach(i => console.log(i))

// for(let i of s){
//     console.log(i)
// }

// console.log(s.size)

// console.log(s.has(100))

// console.log(s.delete(3))
// console.log(s)

// s.clear()
// console.log(s)

// 数组去重
const arr = [1, 2, 3, 4, 56, 6, 3, 2, 1, 4, , 6]

// const res = Array.from(new Set(arr))
const res = [...new Set(arr)]

console.log(res)

