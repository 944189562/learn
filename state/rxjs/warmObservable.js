import { Observable, share } from "rxjs";

const source$ = new Observable(subscriber => {
  console.log('stream 開始');
  setTimeout(() => subscriber.next(1), 100);
  setTimeout(() => subscriber.next(2), 200);
  setTimeout(() => subscriber.next(3), 300);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
    console.log('steam 結束');
  }, 400);
});

// ---1---2---3---(4|)

const hotSource$ = source$.pipe(
  share()
)

setTimeout(() => {
  hotSource$.subscribe(data => console.log(`Observable 第一次訂閱: ${data}`));

  setTimeout(() => {
    hotSource$.subscribe(data => console.log(`Observable 第二次訂閱: ${data}`));
  }, 200);
}, 1000);