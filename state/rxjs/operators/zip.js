import { zip, interval, map } from "rxjs";

const sourceA$ = interval(1000).pipe(map((data) => `A${data + 1}`));
const sourceB$ = interval(2000).pipe(map((data) => `B${data + 1}`));
const sourceC$ = interval(5000).pipe(map((data) => `C${data + 1}`));

zip(sourceA$, sourceB$, sourceC$).subscribe(data => {
  console.log(`zip 示例：${data}`)
})
