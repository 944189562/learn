import { pairwise } from "rxjs/operators";
import { of } from "rxjs";

of(1, 2, 3, 4, 5)
  .pipe(pairwise())
  .subscribe((data) => console.log(`pairwise 示例：${data}`));
