// 1. 普通导入
// import { name, age, obj, foo } from './foo.js'
// console.log(name, age)

// 2. 起别名
// import { fName, fAge } from './foo.js'
// console.log(fName, fAge)

// import { fName as name, fAge as age } from './foo.js'
// console.log(name, age)

// 3. * 直接拿出所有的内容
import * as foo from './foo.js'
console.log(foo)
