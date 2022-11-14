import { timer } from "rxjs";
import { tap, map } from "rxjs/operators";

timer(0, 1000)
  .pipe(
    map((data) => data + 1),
    tap((data) => console.log(`tap1 ${data}`)),
    map(data => data ** 2),
    tap((data) => console.log(`tap2 ${data}`)),
  )
  .subscribe(console.log);
