import { defer, of } from "rxjs";

// const ofFactory = () => of(1, 2, 3, 4);

// defer(ofFactory).subscribe(data => console.log(`defer 示例 () => of(1, 2, 3, 4)：${data}`))

const promiseFactory = () => new Promise((resolve, reject) => {
  console.log('Promise executor 开始执行')
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

const deferSource$ = defer(promiseFactory)
console.log('defer 延迟 promise 执行')
deferSource$.subscribe(data => console.log(`Promise 结果：${data}`))

