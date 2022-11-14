import { iif, interval, throwError, of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";

interval(1000)
  .pipe(
    map((data) => {
      if (data % 2 === 0) {
        return data;
      }

      throw new Error("发生错误");
    }),
    catchError((err) => {
      if (err === null) {
        return interval(1000);
      }

      return throwError(err);
    })
  )
  .subscribe({
    next: (data) => console.log(data),
    error: (err) => console.log(err),
  });

interval(1000)
  .pipe(
    switchMap((data) =>
      iif(() => data % 2 === 0, of(data), throwError("发生错误"))
    )
  )
  .subscribe({
    next: (data) => console.log(data),
    error: (err) => console.log(err),
  });
