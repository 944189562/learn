import { combineLatest, interval, map } from "rxjs";

const sourceA$ = interval(1000).pipe(map((data) => `A${data + 1}`));
const sourceB$ = interval(2000).pipe(map((data) => `B${data + 1}`));
const sourceC$ = interval(3000).pipe(map((data) => `C${data + 1}`));

// ---A1---A2---A3---A4---A5---A6---A7---A8---A9--...
// --------B1--------B2--------B3--------B4-------...
// -------------C1-------------C2-------------C3--...

const subscription = combineLatest([sourceA$, sourceB$, sourceC$]).subscribe(data => console.log(`combineLatest 示例：${data}`))