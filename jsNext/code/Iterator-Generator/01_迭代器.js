// 迭代器
// const iterator = {
//   next: function () {
//     return {done: true, value: 123}
//   }
// }

const names = ['nba', 'cba', 'abc']

// const iterator = names[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// 创建一个迭代器对象来访问数组
// let index = 0
// const namesIterator = {
//   next: function () {
//     if (index < names.length) {
//       return {done: false, value: names[index++]}
//     } else {
//       return {done: true, value: undefined}
//     }
//   }
// }

// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())

function createArrayIterator(arr) {
  let index = 0
  return {
    next: function () {
      if (index < arr.length) {
        return {done: false, value: arr[index++]}
      } else {
        return {done: true, value: undefined}
      }
    }
  }
}

const namesIterator = createArrayIterator(names)

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

// 创建一个无限的迭代器
function createNumberIterator() {
  let index = 0
  return {
    next: function () {
      return {done: false, value: index++}
    }
  }
}

const numberIterator = createNumberIterator()
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())

