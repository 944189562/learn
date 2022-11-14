import { EMPTY } from "rxjs";

// 弹珠图 |

EMPTY.subscribe({
  next: data => console.log(data),
  complete: () => console.log('empty 结束')
})