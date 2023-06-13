import ArrayQueue from "./ArrayQueue";

let queue = new ArrayQueue<string>()

queue.enqueue('nba')
queue.enqueue('cba')
queue.enqueue('ncaa')
queue.enqueue('cuba')

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.isEmpty())
console.log(queue.size)