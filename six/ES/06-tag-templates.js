const name = 'tom'
const gender = true

function myTagFunc(strings, name, gender) {
    console.log(strings)
    return strings[0] + name + strings[1] + gender + strings[2]
}

const r = myTagFunc`hi, ${name} is a ${gender}.`

console.log(r)
