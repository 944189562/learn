import { interval } from "rxjs";
import { share, take, tap, shareReplay } from "rxjs";

export const source$ = interval(1000).pipe(
  take(1),
  tap((_) => console.log("exec")),
  shareReplay(1)
);

source$.subscribe(console.log);

setTimeout(() => source$.subscribe(console.log), 5000);
