import { interval, Subject } from "rxjs";
import { take, multicast, refCount, share, shareReplay } from "rxjs/operators";

const source$ = interval(1000).pipe(
  take(10),
  // multicast(() => new Subject()),
  // refCount(),
  // share()
  shareReplay(2)
);

// source$.connect()
source$.subscribe(console.log);
setTimeout(() => source$.subscribe(console.log), 5000);