// NEVER SAY DIE => never-say-die
const _ = require('lodash')
const str = 'NEVER SAY DIE'

// _.split()
const split = _.curry((sep, str) => _.split(str, sep))

// _.toLower()
// _.map()
const map = _.curry((fn, array) => _.map(array, fn))

// _.join()
const join = _.curry((sep, array) => _.join(array, sep))

const log = (v) => {
    console.log(v)
    return v
}

const trace = _.curry((tag, v) => {
    console.log(tag, v)
    return v
})

const f = _.flowRight(join('-'), trace('map after'), map(_.toLower), trace('split after'), split(' '))

console.log(f(str))