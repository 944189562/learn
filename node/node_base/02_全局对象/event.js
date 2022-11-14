const EventEmitter = require('events')

const door = new EventEmitter()

door.addListener('fn1', () => {
  console.log('fn1')
})

setTimeout(() => {
  door.emit('fn1')
}, 1000)

console.log(door.eventNames())
console.log(door.getMaxListeners())
