import { of } from "rxjs";
import { pairwise, map, scan } from "rxjs/operators";

const priceHistories = [100, 98, 96, 102, 99, 105, 105];

const source$ = of(...priceHistories).pipe(
  pairwise(),
  map(([yestodayPrice, todayPrice], index) => ({
    day: index + 2,
    price: todayPrice,
    priceIndex: yestodayPrice < todayPrice,
    lessDay: todayPrice < 100 ? 1 : 0,
  })),
  scan(
    (acc, value) => ({
      ...value,
      lessDay: acc.lessDay + value.lessDay,
    }),
    {
      day: 1,
      price: 0,
      priceIndex: false,
      lessDay: 0,
    }
  )
);

source$.subscribe((data) =>
  console.log(
    `第${data.day}天，今日股价：${data.price}，股价${
      data.priceIndex ? "上涨" : "下跌"
    }，历史股价小于 100 的有 ${data.lessDay} 天`
  )
);
