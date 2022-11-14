import { concat, of } from "rxjs";

const sourceA$ = of(1, 2);
const sourceB$ = of(3, 4);
const sourceC$ = of(5, 6);

sourceA$.subscribe({
  next: (data) => console.log(data),
  complete: () =>
    sourceB$.subscribe({
      next: (data) => console.log(data),
      complete: () => sourceC$.subscribe((data) => console.log(data)),
    }),
});

console.log('使用concat 来解决嵌套')
concat(sourceA$, sourceB$, sourceC$).subscribe(console.log)