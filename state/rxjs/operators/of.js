import { of } from "rxjs";

// (1|)
of(1).subscribe(data => console.log(`of 范例：${data}`))

// (1234|)
of(1,2,3,4).subscribe(data => console.log(`of 范例：${data}`))