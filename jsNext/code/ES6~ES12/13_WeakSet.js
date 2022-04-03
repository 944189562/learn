const weakSet = new WeakSet()

const obj = {}

weakSet.add(obj)
weakSet.delete(obj)
console.log(weakSet.has(obj))


// WeakSet的应用场景
const personSet = new WeakSet()
class Person {
  constructor() {
    personSet.add(this)
  }
  running() {
    if(!personSet.has(this)) {
      throw new Error('不能通过非构造方法对象调用running方法')
    }
    console.log('running!', this)
  }
}

const p = new Person()
p.running()
// p.running.call({name: 'jz'}) // Error: 不能通过非构造方法对象调用running方法