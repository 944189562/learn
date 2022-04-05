const obj = {
  name: 'jz',
  age: 18,
  friends: {
    name: 'kobe'
  },
  hobbies: ['篮球', '足球'],
  foo: function () {
    console.log(this.age)
  }
}

// 1. 引用赋值
const info = obj

// 2. 浅拷贝
const info2 = {...obj}
const info3 = Object.assign(obj)

// 3. 深拷贝
const info4 = JSON.parse(JSON.stringify(obj))
console.log(info4)