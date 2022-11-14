import { of, range, asyncScheduler, scheduled } from "rxjs";

console.log("start");
// of([1, 2, 3], asyncScheduler).subscribe({
//   next: console.log,
//   complete: () => console.log("complete~"),
// });
scheduled(range(0, 100), asyncScheduler).subscribe({
  next: console.log,
  complete: () => console.log("complete~"),
});

console.log("end");
