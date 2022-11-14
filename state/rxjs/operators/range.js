import { range } from "rxjs";

// (3456|)
range(3, 4).subscribe(data => console.log(`range 范例：${data}`))