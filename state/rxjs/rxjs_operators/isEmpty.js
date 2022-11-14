import { EMPTY, interval, timer } from "rxjs";
import {
  isEmpty,
  defaultIfEmpty,
  find,
  take,
  findIndex,
  map,
  every,
  auditTime,
  tap,
} from "rxjs/operators";

// isEmpty
// EMPTY.pipe(isEmpty()).subscribe(console.log)

// defaultIfEmpty
// EMPTY.pipe(defaultIfEmpty(0)).subscribe(console.log)

// find
// timer(0, 1000).pipe(
//   find(data => data === 3),
//   take(5)
// ).subscribe(console.log)

// findIndex
// timer(0, 1000).pipe(
//   map((data) => data * 2),
//   findIndex((data) => data === 8)
// ).subscribe(console.log);

// every
// timer(0, 1000)
//   .pipe(
//     map((data) => data * 2),
//     take(5),
//     every((data) => data % 2 === 0)
//   )
//   .subscribe(console.log);

const source$ = timer(0, 400);

source$
  .pipe(
    map((data) => `data ${data + 1}`),
    tap(console.log),
    auditTime(1000)
  )
  .subscribe(console.log);
