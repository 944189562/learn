const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter()

myEmitter.on('click', (...args) => {
  console.log('emit click1 => ', ...args)
})

const handler = (...args) => {
  console.log('emit click2 => ', ...args)
}

myEmitter.once('click', handler)

myEmitter.on('tap', (...args) => {
  console.log('emit tap1 => ', ...args)
})

myEmitter.prependListener('tap', (...args) => {
  console.log('emit tap2 => ', ...args)
})

myEmitter.emit('click', 'jz', 'james', 'kobe')
myEmitter.emit('tap', 'tap1')
// myEmitter.off('click', handler)
// myEmitter.emit('click', 'jz', 'james', 'kobe')

console.log(myEmitter.eventNames())
console.log(myEmitter.getMaxListeners())
console.log(myEmitter.listenerCount('click'))
console.log(myEmitter.listeners('click'))

myEmitter.removeAllListeners('click')
myEmitter.emit('click', 'jz', 'james', 'kobe')


// print
// emit click1 =>  jz james kobe
// emit click2 =>  jz james kobe
// emit tap1 =>  tap1
// emit click1 =>  jz james kobe
// emit click2 =>  jz james kobe
//   [ 'click', 'tap' ]
// 10
// 2
//   [ [Function (anonymous)], [Function: handler] ]
