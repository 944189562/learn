import LinkedList from "./LinkedList";

const linkedList = new LinkedList()

console.log('------------- test append -------------')
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')
linkedList.append('eee')
linkedList.traverse()

console.log('------------- test insert -------------')
linkedList.insert(1, 'nba')
linkedList.traverse()

console.log('------------- test get -------------')
console.log(linkedList.get(0))
console.log(linkedList.get(3))
console.log(linkedList.get(5))
console.log(linkedList.get(9))
linkedList.traverse()

console.log('------------- test removeAt -------------')
linkedList.removeAt(0)
linkedList.removeAt(3)
linkedList.traverse()

console.log('------------- test remove -------------')
linkedList.remove('eee')
linkedList.traverse()

console.log('------------- test update -------------')
linkedList.update(1, 'cba')
linkedList.update(2, 'cuba')
linkedList.traverse()

console.log('------------- test indexOf -------------')
console.log(linkedList.indexOf('nba'))
console.log(linkedList.indexOf('cba'))
console.log(linkedList.indexOf('cuba'))
console.log(linkedList.indexOf('eee'))

console.log('------------- test isEmpty -------------')
console.log(linkedList.isEmpty())
console.log(linkedList.length)
