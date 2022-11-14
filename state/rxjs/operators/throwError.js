import { throwError } from "rxjs";

const source$ = throwError('Error');
source$.subscribe({
  next: data => console.log(`throwError 范例（next）：${data}`),
  complete: data => console.log(`throwError 范例（complete）：${data}`),
  error: data => console.log(`throwError 范例（error）：${data}`)
})

