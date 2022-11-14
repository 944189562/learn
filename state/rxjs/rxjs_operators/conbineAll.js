import { Subject, timer } from "rxjs";
import { map, take, combineAll } from "rxjs/operators";

const generateStream = (round) =>
  timer(0, 1000).pipe(
    map((data) => `source ${round}: ${data}`),
    take(3)
  );

const source$ = new Subject();

const stream$ = source$.pipe(map((round) => generateStream(round)));

stream$.pipe(combineAll()).subscribe(console.log);

source$.next(1);

setTimeout(() => {
  source$.next(2);
}, 4000);

setTimeout(() => {
  source$.next(3);
}, 5000);

