import { of, interval, Subject } from "rxjs";
import { delay, delayWhen, take } from "rxjs/operators";

// of(1, 2, 3).pipe(delay(1000)).subscribe(console.log);

const source$ = new Subject();

const delayFn = (value) => of(value).pipe(delay((value % 2) * 2000));
interval(1000)
  .pipe(
    take(3),
    delayWhen((value) => delayFn(value), source$)
  )
  .subscribe(console.log);

  setTimeout(() => source$.next(1), 5000)