// IO 函子
const fs = require('fs')
const fp = require('lodash/fp')

class IO {
    static of(value) {
        return new IO(function () {
            return value
        })
    }

    constructor(fn) {
        this._value = fn
    }

    map(fn) {
        return new IO(fp.flowRight(fn, this._value))
    }
}

// 实现cat 读取文件并且打印出来
let readFile = function(filename) {
    return new IO(function() {
        return fs.readFileSync(filename, 'utf-8')
    })
}

let print = function(x) {
    return new IO(function() {
        console.log(x)
        return x
    })
}

// IO(IO(x))
let cat = fp.flowRight(print, readFile)
let r = cat('package.json')._value()._value()
console.log(r)
