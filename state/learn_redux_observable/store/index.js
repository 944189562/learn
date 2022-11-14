import { combineEpics, createEpicMiddleware } from "redux-observable";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { pingEpic } from "./epic";
import { pingReducer } from "./reducer";

const rootEpic = combineEpics(pingEpic);
const rootReducer = combineReducers({
  ping: pingReducer,
});

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = legacy_createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(rootEpic);

  return store;
}
