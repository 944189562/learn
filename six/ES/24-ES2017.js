const p1 = {
    firstName: 'Z',
    lastName: 'Justin',
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(p1.fullName)

const p2 = Object.assign({}, p1)
p2.firstName = 'Lei'
console.log(p2.fullName)
// Object getOwnPropertyDescriptors defineProperties
const descriptors = Object.getOwnPropertyDescriptors(p1)
console.log(descriptors)
const p3 = Object.defineProperties({}, descriptors)
p3.firstName = 'Zhang'
console.log(p3.fullName)

// String.prototype.padStart / String.prototype.padEnd

const books = {
    html: 5,
    css: 3,
    javascript: 128
}

for (const [name, count] of Object.entries(books)) {
    // console.log(name, count)
    console.log(`${name.padEnd(16, '-')}|${count.toString().padStart(5, '-')}`)
}

// 在函数参数中添加尾逗号
const arr = [
    100,
    200,
    300,
]

// async / await
