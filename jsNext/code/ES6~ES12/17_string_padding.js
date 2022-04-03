const message = 'Hello World'

const newMessage = message.padStart(15, '*').padEnd(20, '-')
console.log(newMessage) // ****Hello World-----