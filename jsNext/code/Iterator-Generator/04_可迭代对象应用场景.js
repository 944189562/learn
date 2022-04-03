// 1. for of
// 2. 展开语法(spread syntax)
const iterableObj = {
  names: ['abc', 'cba', 'nba'],
  [Symbol.iterator]: function () {
    let index = 0

    return {
      next: () => {
        if (index < this.names.length) {
          return {done: false, value: this.names[index++]}
        } else {
          return {done: true, value: undefined}
        }
      }
    }
  }
}

const names = ['abc', 'cba', 'nba']
const newNames = [...names, ...iterableObj] // [ 'abc', 'cba', 'nba', 'abc', 'cba', 'nba' ]
console.log(newNames)

const obj = {name: 'jz', age: 18}
// 注意：ES9(ES2018) 中新增的一个特性：对象展开运算用的不是迭代器实现的
const newObj = {...obj}
console.log(obj)

// 3. 解构语法
const {name1, name2} = names
// 注意：也是ES9新增的特性，不是迭代器实现的
const {name, age} = obj

// 3.创建一些其他对象时
const set1 = new Set(iterableObj)
const set2 = new Set(names)

const arr1 = Array.from(iterableObj)

// 5. Promise.all 参数为可迭代对象
Promise.all(iterableObj).then(res => {
  console.log(res)
})