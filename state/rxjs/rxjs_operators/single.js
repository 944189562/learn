import { timer, EMPTY } from "rxjs";
import { take, single } from "rxjs/operators";

// single 事件只能发生一次
// timer(0, 1000)
//   .pipe(take(10), single())
//   .subscribe({
//     next: (data) => {
//       console.log(data);
//     },
//     error: (err) => console.log(`single error: ${err}`),
//   });

// timer(0, 1000)
//   .pipe(take(1), single())
//   .subscribe({
//     next: (data) => {
//       console.log(data);
//     },
//     error: (err) => console.log(`single error: ${err}`),
//   });

// EMPTY 没有事件发生，也不符合只发生一次事件
// EMPTY.pipe(single()).subscribe({
//   next: console.log,
//   error: console.log
// })

// timer(1000).pipe(
//   take(5),
//   single(data => data === 0)
// ).subscribe({
//   next: data => {
//     console.log(`single 範例 (4): ${data}`);
//   },
//   error: (err) => {
//     console.log(`single 發生錯誤範例 (4): ${err}`)
//   },
//   complete: () => {
//     console.log('single 範例結束 (4)');
//   }
// });

timer(0, 1000)
  .pipe(
    take(5),
    single((data) => data === 3)
  )
  .subscribe({
    next: (data) => {
      console.log(`single 範例 (5): ${data}`);
    },
    error: (err) => {
      console.log(`single 發生錯誤範例 (5): ${err}`);
    },
    complete: () => {
      console.log("single 範例結束 (5)");
    },
  });
