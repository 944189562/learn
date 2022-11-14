import { timer, from } from "rxjs";
import { toArray, take, filter, map } from "rxjs/operators";

// timer(0, 1000).pipe(take(3), toArray()).subscribe(console.log);
from([1, 2, 3, 4, 5, 6, 7, 8, 9])
  .pipe(
    // map((value) => value ** 2),
    filter((value) => value % 3 === 0),
    toArray()
  )
  .subscribe(console.log);
