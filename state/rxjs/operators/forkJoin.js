import { interval, forkJoin } from "rxjs";
import { map, take } from "rxjs/operators";

const sourceA$ = interval(1000).pipe(
  map((data) => `A${data + 1}`),
  take(5)
);

const sourceB$ = interval(2000).pipe(
  map((data) => `B${data + 1}`),
  take(4)
);

const sourceC$ = interval(3000).pipe(
  map((data) => `C${data + 1}`),
  take(3)
);

const subscription = forkJoin([sourceA$, sourceB$, sourceC$]).subscribe(
  (data) => console.log(`forkJoin 示例：${data}`)
);

/**
 * forkJoin 会同时订阅传入的Observables，直到每个Observable 都「结束」后，将每个Observable 的「最后一笔值」组合起来
 * 弹珠图 Marble Testing
 * sourceA$: ---A1---A2---A3---A4---A5---|
 * sourceB$: --------B1-------B2-------B3-------B4
 * sourceC$: -----------C1-----------C2-----------C3---|
 * forkJoin([sourceA$, sourceB$, sourceC$])
 *           ------------------------------------------|
 *                                          [A5, B4, C3]
 */
