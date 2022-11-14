import { Subject } from "rxjs";

// const youtubeSubject = new Subject()

// const subcriptionA = youtubeSubject.subscribe(id => {
//   console.log(`subcriptionA, receive ${id}`)
// })

// const subcriptionB = youtubeSubject.subscribe(id => {
//   console.log(`subcriptionB, receive ${id}`)
// })

// youtubeSubject.next(1)

class CreateSubject {
  constructor() {
    this.subject = new Subject()
  }

  notify(id) {
    this.subject.next(id)
  }

  addObserver(observer) {
    return this.subject.subscribe(observer)
  }

  deleteObserver(subscription) {
    subscription.unsubscribe()
  }
}

const youtube$= new CreateSubject()

const subscriptionA = youtube$.addObserver(id => console.log(`A, receive ${id}`))
const subscriptionB = youtube$.addObserver(id => console.log(`B, receive ${id}`))

youtube$.notify(1)

youtube$.deleteObserver(subscriptionB)

youtube$.notify(2)
