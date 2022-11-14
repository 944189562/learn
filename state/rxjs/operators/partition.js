import {partition, interval} from 'rxjs'

const source$ = interval(1000)

// ---1---2---3---4---5---6---7---8---9
const [sourceEven$, sourceOdd$] = partition(source$, data => data % 2 === 0)
// -------2-------4-------6-------8---|
// ---1-------3-------5-------7-------9|

sourceEven$.subscribe(data => console.log(`partition 示例：偶数 ${data}`))
sourceOdd$.subscribe(data => console.log(`partition 示例：奇数 ${data}`))