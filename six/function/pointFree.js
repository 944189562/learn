// point free
// Hello  world => hello_world
const fp = require('lodash/fp')
const f = fp.flowRight(fp.replace(/\s+/g, '-'), fp.toLower)

// console.log(f('Hello  world'))

// world wild web => W. W. W
// const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '))
const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))

// console.log(firstLetterToUpper('world wild web'))