// NEVER SAY DIE => never-say-die
const _ = require('lodash')
const fp = require('lodash/fp')
const str = 'NEVER SAY DIE'

const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))

// console.log(f(str))

console.log(_.map(['23', '5', '123'], parseInt))
// _.map函数返回三个值value, index, array
// parseInt('23', 0, array)
// parseInt('5', 1, array)
// parseInt('123', 2, array)

console.log(fp.map(parseInt, ['23', '5', '123']))
// fp.map 函数返回一个值value