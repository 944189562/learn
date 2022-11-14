import { iif, interval, throwError, of } from "rxjs";
import { map, switchMap, retry } from "rxjs/operators";

interval(1000)
  .pipe(
    switchMap((data) =>
      iif(() => data % 2 === 0, of(data), throwError("发生错误"))
    ),
    map((data) => data + 1),
    retry(3)
  )
  .subscribe({
    next: (data) => console.log(data),
    error: (err) => console.log(err),
  });

  