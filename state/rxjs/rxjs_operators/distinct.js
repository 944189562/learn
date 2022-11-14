import { from } from "rxjs";
import { distinct } from "rxjs/operators";

from([1, 2, 3, 4, 5, 6, 2, 4, 3, 12, 56, 3])
  .pipe(distinct())
  .subscribe(console.log);

const students = [
  {
    id: 1,
    score: 80,
  },
  {
    id: 2,
    score: 99,
  },
  {
    id: 3,
    score: 86,
  },
  {
    id: 1,
    score: 80,
  },
  {
    id: 2,
    score: 99,
  },
  {
    id: 3,
    score: 86,
  },
];

from(students).pipe(distinct(student => student.id)).subscribe(console.log)