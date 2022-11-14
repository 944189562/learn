// es module 导出内容，cjs 导入
const {sum} = require('./js/math')

// cjs 导出，esm 导入
import {dateFormate} from './js/formate'

console.log(sum(1, 2))
console.log(dateFormate())