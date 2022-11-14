import { interval } from "rxjs";
import { map, take, startWith, pairwise } from "rxjs/operators";

interval(1000).pipe(
  take(6),
  map(data => data + 1),
  startWith(0),
  pairwise()
).subscribe(console.log)

// startWith(initialValue)
// ---1---2---3---4---5---6|
// startWith(0)
// 0--1---2---3---4---5---6|
