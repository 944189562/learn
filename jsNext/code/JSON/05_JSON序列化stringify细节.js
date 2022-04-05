const obj = {
  name: 'jz',
  age: 18,
  friends: {
    name: 'kobe'
  },
  hobbies: ['篮球', '足球'],
  // toJSON: function () {
  //   return this
  // }
}

// 1 直接转换
const objString = JSON.stringify(obj)
console.log(objString)
localStorage.setItem('obj', objString)
const info = JSON.parse(localStorage.getItem('obj'), function (key, value) {
  if (key === 'age') {
    value -= 2
  }

  return value
})

console.log(info)

// 2. stringify 第二个参数replacer
// 2.1 传入一个数组
const objString2 = JSON.stringify(obj, ['name', 'friends'])
console.log(objString2)
// 2.2 传入一个函数
const objString3 = JSON.stringify(obj, function (key, value) {
  if (key === "age") {
    value += 2
  }
  return value
})
console.log(objString3)

// 3. stringify 第三个参数，用来格式化
console.log(JSON.stringify(obj, null, 2))
console.log(JSON.stringify(obj, null, '~~'))