import { of } from "rxjs";
import { map } from "rxjs/operators";

// of(1,2,3,4).pipe(
//   map(data => data ** 2)
// ).subscribe(console.log)

const studentScore = [
  { name: "小明", score: 100 },
  { name: "小王", score: 49 },
  { name: "小李", score: 30 },
];

of(...studentScore)
  .pipe(
    map((data) => ({
      ...data,
      newScore: Math.sqrt(data.score),
    })),
    map((data) => ({
      ...data,
      newScore: data.newScore * 10,
    })),
    map((data) => ({
      ...data,
      newScore: Math.round(data.newScore),
    })),
    map((data) => ({
      ...data,
      pass: data.newScore >= 60,
    }))
  )
  .subscribe((data) => {
    console.log(
      `map 示例：${data.name} 成绩为 ${data.newScore} (${
        data.pass ? "及格" : "不及格"
      })`
    );
  });
