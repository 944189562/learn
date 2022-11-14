import { timer } from "rxjs";
import { mergeMap, map } from "rxjs";

const source$ = timer(0, 3000);
const getSource2 = (input) =>
  timer(0, 1500).pipe(map((data) => `资料流: ${input}: ${data}`));

source$
  .pipe(mergeMap((data) => getSource2(data)))
  .subscribe((res) => console.log(res));
