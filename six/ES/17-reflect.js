const person = {
    name: 'tom',
    age: 12
}

// console.log('name' in person)
// console.log(delete person['name'])
// console.log(Object.keys(person))

console.log(Reflect.has(person, 'name'))
console.log(Reflect.deleteProperty(person, 'name'))
console.log(Reflect.ownKeys(person))