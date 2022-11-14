import { ofType } from "redux-observable";
import { filter, map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GET_MULTIDATA } from "./home/constants";
import { INCREMENT_IF_ODD } from "./counter/constants";
import {
  changeBannerAction,
  changeRecommendAction,
} from "./home/actionCreators";
import { addAction } from "./counter/actionCreators";

export const fetchMultiEpic = (action$) =>
  action$.pipe(
    ofType(GET_MULTIDATA),
    mergeMap((action) =>
      ajax.getJSON(`http://123.207.32.32:8000/home/multidata`).pipe(
        map((res) => {
          console.log("res: ", res);
          const { banner, recommends } = res.data;
          return changeBannerAction(banner.list);
        })
      )
    )
  );

export const incrementIfOddEpic = (action$, state$) =>
  action$.pipe(
    ofType(INCREMENT_IF_ODD),
    filter(() => state$.value.counter % 2 === 1),
    map(() => addAction(1))
  );
