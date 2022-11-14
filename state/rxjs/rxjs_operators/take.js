import { timer, range, Subject } from "rxjs";
import { take, takeLast, takeUntil, takeWhile } from "rxjs/operators";

// timer(0, 1000).pipe(take(3)).subscribe(console.log)
timer(0, 1000).pipe(take(5), takeLast(3)).subscribe(console.log);

// const source$ = new Subject()
// timer(0, 1000).pipe(takeUntil(source$)).subscribe(console.log)
// setTimeout(() => source$.next(1), 5500)

// timer(0, 1000).pipe(takeWhile(data => data < 3)).subscribe(console.log)
