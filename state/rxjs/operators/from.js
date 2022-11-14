import { from } from "rxjs";

// (1234|)
from([1, 2, 3, 4]).subscribe((data) => console.log(`from 案例(1)：${data}`));

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

from(range(1,4)).subscribe(data => console.log(`from 案例(2)：${data}`))

from(Promise.resolve(1)).subscribe(data => console.log(`from 案例(3)：${data}`))
