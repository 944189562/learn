const obj = {
  name: 'jz',
  age: 18
}

const entries = Object.entries(obj)
console.log(entries) // [ [ 'name', 'jz' ], [ 'age', 18 ] ]

const info = Object.fromEntries(entries)
console.log(info) // { name: 'jz', age: 18 }

// 应用场景
const queryString = 'http://www.baidu.com/api/users?name=jz&age=18'.split('?')[1]
const searchParams = new URLSearchParams(queryString)
console.log(searchParams) // URLSearchParams { 'name' => 'jz', 'age' => '18' }
const paramsObj = Object.fromEntries(searchParams)
console.log(paramsObj) // { name: 'jz', age: '18' }