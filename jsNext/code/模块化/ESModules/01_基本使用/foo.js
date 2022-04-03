// 1. export 声明语句
// export const name = 'jz'
// export const age = 18
//
// export const obj = {}
//
// export class Foo {}

// 2. export 导出和声明分开
const name = 'jz'
const age = 18
const obj = {}

function foo() {
}

// export {
//   name,
//   age,
//   obj,
//   foo
// }

// 3. 第二种导出时起别名
export {
  name as fName,
  age as fAge,
  foo as fFoo
}