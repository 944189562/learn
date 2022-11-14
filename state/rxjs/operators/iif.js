import { iif, EMPTY, of } from "rxjs";

const emitOneEven = (data) => {
  return iif(() => data % 2 === 0, of("hello"), EMPTY);
};

emitOneEven(1).subscribe(data => console.log(`iif 范例（1）：${data}`))
emitOneEven(2).subscribe(data => console.log(`iif 范例（2）：${data}`))
