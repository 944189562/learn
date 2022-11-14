import { interval, timer } from "rxjs";
import { switchMap, switchAll, map } from "rxjs/operators";

// interval(3000)
//   .pipe(switchMap(() => timer(0, 1000)))
//   .subscribe((data) => console.log(data));

interval(3000)
  .pipe(
    map((data) => timer(0, 1000)),
    switchAll()
  )
  .subscribe((data) => console.log(data));
