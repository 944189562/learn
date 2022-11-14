import { filter, delay, map } from "rxjs/operators";
import { ofType } from "redux-observable";

export const pingEpic = (action$) =>
  action$.pipe(
    // filter((action) => action.type === "PING"),
    ofType('PING'),
    delay(1000), // Asynchronously wait 1000ms then continue
    map(() => ({ type: "PONG" }))
  );
