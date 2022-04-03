// 空值合并运算 ?? 只有 undefined 和 null 为false
const foo = undefined // 0 null
const bar = foo ?? 'default value'

console.log(bar)

