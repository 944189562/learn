const person = {
    name: 'tom',
    age: 12
}

const personProxy = new Proxy(person, {
    get(target, property) {
        return property in target ? target[property] : 'default'
    },
    set(target, property, value) {
        if(property === 'age') {
            if(!Number.isInteger(value)){
                throw new TypeError(`age: ${value} is not int.`)
            }
        }

        target[property] = value
    }
})

personProxy.age = 13

// console.log(personProxy.name)
// console.log(personProxy.age)

const list = []

const listProxy = new Proxy(list, {
    set(target, property, value) {
        console.log('set ', property, value)
        target[property] = value
        return true
    }
})

listProxy.push(1)