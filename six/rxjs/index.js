class SafeObserver {
    constructor(destination) {
        this.destination = destination
    }

    next(value) {
        const destination = this.destination;
        if (destination.next && !this.isUnsubscribed) {
            destination.next(value)
        }
    }

    error(err) {
        const destination = this.destination
        if (!this.isUnsubscribed) {
            if (destination.error) {
                destination.error(err)
            }
            this.unsubscribe()
        }
    }

    complete() {
        const destination = this.destination
        if (!this.isUnsubscribed) {
            if (destination.complete) {
                destination.complete()
            }
            this.unsubscribe()
        }
    }

    unsubscribe() {
        console.log('unsubbed')
        this.isUnsubscribed = true
        if (this._unsubscribe) {
            this._unsubscribe()
        }
    }
}

class Observable {
    constructor(_subscribe) {
        this._subscribe = _subscribe
    }

    subscribe(observer) {
        const safeObserver = new SafeObserver(observer)
        safeObserver._unsubscribe = this._subscribe(safeObserver)
        return () => safeObserver.unsubscribe()
    }
}

const myObservable = new Observable((observer) => {
    for (let i = 0; i < 10; i++) {
        observer.next(i)
    }

    observer.complete()
    observer.next('haha')
})

const observer = {
    next(value) { console.log('next -> ' + value) },
    error(err) { },
    complete() { console.log('complete') }
}

const unsub = myObservable.subscribe(observer)

unsub.unsubscribe()