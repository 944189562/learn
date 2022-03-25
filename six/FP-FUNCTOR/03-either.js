class Left {
    static of(value) {
        return new Left(value)
    }

    constructor(value) {
        this._value = value
    }

    map(fn) {
        return this
    }
}

class Right {
    static of(value) {
        return new Right(value)
    }

    constructor(value) {
        this._value = value
    }

    map(fn) {
        return Right.of(fn(this._value))
    }
}

function parseJson(str) {
    try {
        return Right.of(JSON.parse(str))
    } catch(e) {
        return Left.of({ error: e.message })
    }
}

const r1 = parseJson('{ name: zs }')
const r2 = parseJson('{ "name": "zs" }')
            .map(x => x.name.toUpperCase())

console.log(r1)
console.log(r2)