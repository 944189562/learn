import { Subject } from "rxjs";
import { sampleTime } from "rxjs/operators";

const source$ = new Subject();

source$.pipe(sampleTime(1500)).subscribe(console.log);

setTimeout(() => source$.next(1), 0);
setTimeout(() => source$.next(2), 500);
setTimeout(() => source$.next(3), 1000);
setTimeout(() => source$.next(4), 4000);
setTimeout(() => source$.next(5), 5000);
setTimeout(() => source$.complete(), 5500);
