import { timer } from "rxjs";
import { exhaustMap, take, map } from "rxjs/operators";

const source1$ = timer(0, 3000);
const source2$ = timer(0, 1500).pipe(take(3));

source1$
  .pipe(
    exhaustMap((input) => {
      return source2$.pipe(map((data) => `資料流 ${input}: ${data}`));
    })
  )
  .subscribe((res) => console.log(res));

  /**
   *
    資料流 0: 0
    資料流 0: 1
    資料流 0: 2
    資料流 2: 0
    資料流 2: 1
    資料流 2: 2
    資料流 4: 0
    資料流 4: 1
    資料流 4: 2
    資料流 6: 0
    資料流 6: 1
    資料流 6: 2
  *   
  */
