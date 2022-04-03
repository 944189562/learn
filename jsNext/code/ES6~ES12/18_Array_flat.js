const arr = [1, 2, [[3, 45], 6], [7, 8]]

console.log(arr.flat())

console.log(arr.flat(Infinity))

const messages = ['Hello World', 'my name is jz']

const mewMessages = messages.flatMap((message) => {
  return message.split(' ')
})

console.log(mewMessages) // [ 'Hello', 'World', 'my', 'name', 'is', 'jz' ]
