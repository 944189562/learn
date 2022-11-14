const subject = {
  observers: [],
  notifyObserver: id => {
    subject.observers.forEach(observer => observer.notify(id))
  },
  addObserver: observer => {
    subject.observers.push(observer)
  },
  deleteObserver: observer => {
    subject.observers = subject.observers.filter(obs => obs !== observer)
  }
}

const observerA = {
  notify(id) {
    console.log(`A, 收到${id}`)
  }
}

const observerB = {
  notify(id) {
    console.log(`B, 收到${id}`)
  }
}


subject.addObserver(observerA)
subject.notifyObserver(1)
subject.addObserver(observerB)

subject.notifyObserver(2)
subject.notifyObserver(3)

subject.deleteObserver(observerB)

subject.notifyObserver(4)