const obj1 = {
  name: 'jz'
}
const obj2 = {
  age: 18
}

const info = {
  // 对象会被转成字符串 [object Object]
  [obj1]: 'aaa',
  [obj2]: 'bbb'
}

console.log(info) // { '[object Object]': 'bbb' }

// 常见的属性方法
const map = new Map()
// set(key, value)
map.set(obj1, 'aaa')
map.set(obj2, 'bbb')
map.set(1, 'ccc')
console.log(map) // Map(3) { { name: 'jz' } => 'aaa', { age: 18 } => 'bbb', 1 => 'ccc' }

// entries [[key, value], [key, value]...]
const map1 = new Map([
  [obj1, 'aaa'], [obj2, 'bbb'], [1, 'ccc']
])
console.log(map1) // Map(3) { { name: 'jz' } => 'aaa', { age: 18 } => 'bbb', 1 => 'ccc' }

// get(key)
console.log(map.get(obj1))

// size 属性
console.log(map.size)

// has(key)
console.log(map.has(obj2))

// delete(key)
console.log(map.delete(1), map)

