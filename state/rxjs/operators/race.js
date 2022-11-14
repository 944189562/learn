import {race, interval} from 'rxjs'
import {map} from 'rxjs/operators'

const sourceA$ = interval(1000).pipe(
  map(data => `A${data + 1}`)
);
const sourceB$ = interval(2000).pipe(
  map(data => `B${data + 1}`)
);
const sourceC$ = interval(3000).pipe(
  map(data => `C${data + 1}`)
);
/**
 * race 本身就有「竞速」的意思，因此这个operator 接受的参数一样是数个Observables，当订阅发生时，这些Observables 会同时开跑，当其中一个Observable 率先发生事件后，就会以这个Observable 为主，并退订其他的Observables，也就是先到先赢，其他都是输家：
 * 
 */
race([sourceA$, sourceB$, sourceC$])
  .subscribe(data => console.log(`race 示例：${data}`))