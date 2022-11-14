import {merge, interval, map} from 'rxjs'

const sourceA$ = interval(1000).pipe(
  map(data => `A${data}`)
);

const sourceB$ = interval(3000).pipe(
  map(data => `B${data}`)
);

const sourceC$ = interval(5000).pipe(
  map(data => `C${data}`)
);

// ---A0---A1---A2---A3---A4---A5---A6---A7---(A8|)
// -------------B0-------------B1-------------(B2|)
// -----------------------C0---------------------|

const subscription = merge(sourceA$, sourceB$, sourceC$).subscribe(data => {
  console.log(`merge 示例：${data}`)
})

setTimeout(() => {
  subscription.unsubscribe()
}, 10 * 1000)
