import { Subject, timer } from "rxjs";
import { sample } from "rxjs/operators";

const notifier$ = new Subject();
const source$ = timer(0, 1000);
// 0---1---2---3---4---5---...
source$.pipe(sample(notifier$)).subscribe(console.log);

setTimeout(() => notifier$.next(), 1500);
// sample 示範: 0
setTimeout(() => notifier$.next(), 1600);
// (沒事)
setTimeout(() => notifier$.next(), 5000);
// sample 示範: 4
