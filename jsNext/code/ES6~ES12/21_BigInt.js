// ES11 之前 最大整数 MAX_SAFE_INTEGER，再大就不能准确展示
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt) // 9007199254740991
console.log(maxInt + 1) // 9007199254740992
console.log(maxInt + 2) // 9007199254740992

// ES11 新增基本数据类型 BigInt
const bigInt = 9023923423423424234423423423n
console.log(bigInt) // 9023923423423424234423423423n

// console.log(bigInt + 10) // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(bigInt + 10n) // 9023923423423424234423423433n

const num = 100
console.log(bigInt + BigInt(num)) // 9023923423423424234423423523n

const smallNum = Number(bigInt)
console.log(smallNum) // 9.023923423423424e+27