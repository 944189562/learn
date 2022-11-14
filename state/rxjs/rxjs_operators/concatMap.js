import { interval, timer } from "rxjs";
import { concatMap, take } from "rxjs/operators";

const source1$ = interval(3000);
const source2$ = timer(0, 1000).pipe(take(5));

source1$.pipe(concatMap(() => source2$)).subscribe((data) => console.log(data));
