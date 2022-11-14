import { Observable, from, of, map,first, interval } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

// console.log('start')

// observable.subscribe({
//   next(x) {
//     console.log(x)
//   },
//   error(err) {
//     console.log('err => ', err)
//   },
//   complete() {
//     console.log('done')
//   }
// })

// console.log('end')

const observable1 = from([1, 2, 3, 4, 5]);

// const subscription = observable1.subscribe(x => console.log(x))
// subscription.unsubscribe()

// of(1, 2, 3)
//   .pipe(map((x) => x ** 2))
//   .subscribe((x) => console.log(x));

interval(1000)
  // .pipe(first())
  .subscribe(x => console.log(x))