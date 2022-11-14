import { timer } from "rxjs";
import { filter, take, first, last, single } from "rxjs/operators";

const source$ = timer(0, 1000).pipe(take(10));

// filter
// 0---1---2---3---4---5---6---7---8---9|
// filter(data => data > 3)
// ----------------4---5---6---7---8---9|
// source$.pipe(filter( data => data > 3)).subscribe(console.log)

// first
// source$.pipe(first()).subscribe(console.log)
// source$.pipe(first(data => data > 3)).subscribe(console.log)

// last
// source$.pipe(last()).subscribe(console.log)
// 0---1---2---3---4---5---6---7---8---9|
// last()
// ------------------------------------9|
// source$.pipe(last(data => data < 3)).subscribe(console.log)
// 0---1---2---3---4---5---6---7---8---9|
// last(data => data < 3)
// ------------------------------------2|
//         ^ 符合條件的最後一次事件值