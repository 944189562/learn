// function isObject(value) {
//   const valueType = typeof value
//   return (value !== null) && (valueType === 'object' || valueType === 'function')
// }
//
// function deepClone(originValue, map = new WeakMap()) {
//   // Set
//   if (originValue instanceof Set) {
//     return new Set([...originValue])
//   }
//
//   // Map
//   if (originValue instanceof Map) {
//     return new Map([...originValue])
//   }
//
//   // Symbol
//   if (typeof originValue === 'symbol') {
//     return Symbol(originValue.description)
//   }
//
//   // function
//   if (typeof originValue === 'function') {
//     return originValue
//   }
//
//   // object
//   if (!isObject(originValue)) {
//     return originValue
//   }
//
//   if (map.has(originValue)) {
//     return map.get(originValue)
//   }
//
//   // 判断传入的值是对象还是数组
//   const newObject = Array.isArray(originValue) ? [] : {}
//   map.set(originValue, newObject)
//   if (Array.isArray(originValue)) {
//     for (const value of originValue) {
//       const deepValue = deepClone(value, map)
//       newObject.push(deepValue)
//     }
//   } else {
//     for (const key in originValue) {
//       if (originValue.hasOwnProperty(key)) {
//         newObject[key] = deepClone(originValue[key], map)
//       }
//     }
//   }
//
//   const symbolKeys = Object.getOwnPropertySymbols(originValue)
//   for (const sKey of symbolKeys) {
//     newObject[sKey] = deepClone(originValue[sKey], map)
//   }
//
//   return newObject
// }
//
// // 测试代码
// let s1 = Symbol("aaa")
// let s2 = Symbol("bbb")
//
// const obj = {
//   name: "jz",
//   age: 18,
//   friend: {
//     name: "james",
//     address: {
//       city: "广州"
//     }
//   },
//   // 数组类型
//   hobbies: ["abc", "cba", "nba"],
//   // 函数类型
//   foo: function (m, n) {
//     console.log("foo function")
//     console.log("100代码逻辑")
//     return 123
//   },
//   // Symbol作为key和value
//   [s1]: "abc",
//   s2: s2,
//   // Set/Map
//   set: new Set(["aaa", "bbb", "ccc"]),
//   map: new Map([["aaa", "abc"], ["bbb", "cba"]])
// }
//
// obj.info = obj
//
// const newObj = deepClone(obj)
// console.log(newObj === obj)
// console.log(newObj)
// console.log(newObj.info)
//

function isObject(value) {
  const type = typeof value
  return value !== null && type === 'object'
}

function deepClone(originValue, map = new WeakMap()) {
  if (originValue instanceof Set) {
    return new Set([...originValue])
  }

  if (originValue instanceof Map) {
    return new Map([...originValue])
  }

  if (typeof originValue === 'symbol') {
    return Symbol(originValue.description)
  }

  if (typeof originValue === 'function') {
    return originValue
  }

  if (!isObject(originValue)) {
    return originValue
  }

  if (map.has(originValue)) {
    return map.get(originValue)
  }

  const originTypeIsArray = Array.isArray(originValue)
  const newObject = originTypeIsArray ? [] : {}
  map.set(originValue, newObject)

  if (originTypeIsArray) {
    for (const value of originValue) {
      newObject.push(deepClone(value, map))
    }
  } else {
    for (const key in originValue) {
      if (originValue.hasOwnProperty(key)) {
        newObject[key] = deepClone(originValue[key], map)
      }
    }
  }

  const sKeys = Object.getOwnPropertySymbols(originValue)
  for (const sKey of sKeys) {
    newObject[sKey] = deepClone(originValue[sKey], map)
  }

  return newObject
}

// 测试代码
let s1 = Symbol("aaa")
let s2 = Symbol("bbb")

const obj = {
  name: "jz",
  age: 18,
  friend: {
    name: "james",
    address: {
      city: "广州"
    }
  },
  // 数组类型
  hobbies: ["abc", "cba", "nba"],
  // 函数类型
  foo: function (m, n) {
    console.log("foo function")
    console.log("100代码逻辑")
    return 123
  },
  // Symbol作为key和value
  [s1]: "abc",
  s2: s2,
  // Set/Map
  set: new Set(["aaa", "bbb", "ccc"]),
  map: new Map([["aaa", "abc"], ["bbb", "cba"]])
}

obj.info = obj

const newObj = deepClone(obj)
console.log(newObj === obj)
obj.name = 'jz'
obj.age = 20
console.log(newObj)
console.log(newObj.info.info.info)
