import { timer, Subject, switchAll } from "rxjs";
import { map } from "rxjs/operators";

const generateStream = (round) => {
  return timer(0, 1000).pipe(map((data) => `source ${round} : ${data + 1}`));
};

const source$ = new Subject();

const stream$ = source$.pipe(map((round) => generateStream(round)));

stream$.pipe(switchAll()).subscribe((res) => console.log(res));

source$.next(1);

setTimeout(() => source$.next(2), 4000);

setTimeout(() => source$.next(3), 5000);
