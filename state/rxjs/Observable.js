import { Observable, Subject } from "rxjs";

// cold observable
// Cold Observable 每次订阅后就只会有一个观察者，下一个观察者要进行订阅时会是一次新的资料流程，因此Cold Observable 与observer 是「一对一」的关系，这种只会推给唯一一个观察者的方式也称为「unicast」。
const source$ = new Observable((subscriber) => {
  console.log("stream 开始");
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4)
    console.log("stream 结束");
    subscriber.complete();
  }, 1000)
});

// source$.subscribe((data) => console.log(`Observable 第一次订阅：${data}`));
// source$.subscribe((data) => console.log(`Observable 第二次订阅：${data}`));

// hot observable
const sourceSub$ = new Subject()

sourceSub$.subscribe(data => console.log(`Subject 第一次订阅: ${data}`))

sourceSub$.next(1)
sourceSub$.next(2)

sourceSub$.subscribe(data => console.log(`Subject 第二次订阅: ${data}`))

sourceSub$.next(3)
sourceSub$.next(4)
sourceSub$.complete()