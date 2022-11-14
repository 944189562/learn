import { timer } from "rxjs";
import { take, skip, tap,skipLast, skipUntil, skipWhile } from "rxjs/operators";

// timer(0, 1000).pipe(take(6), skip(2)).subscribe(console.log)
timer(0, 1000).pipe(take(5), tap(data => console.log(`tap ${data}`)),skipLast(3)).subscribe(console.log)