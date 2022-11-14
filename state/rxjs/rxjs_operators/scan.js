import { scan, reduce } from "rxjs/operators";
import { of } from "rxjs";

const donateAmount = [1, 2, 3, 4, 5];

const accumDonate$ = of(...donateAmount).pipe(
  scan((acc, value) => acc + value, 0)
);

accumDonate$.subscribe(data => console.log(`scan 累计金额：${data}`))

const source$ = of(...donateAmount).pipe(
  reduce((acc, value) => acc + value, 0)
)

source$.subscribe(data => console.log(`reduce 累计金额：${data}`))