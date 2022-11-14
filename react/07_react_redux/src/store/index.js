import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createEpicMiddleware } from "redux-observable";

import { reducer, epic } from "./reducer.js";
import mySaga from "./saga";

// 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 创建redux-observable 中间件
const epicMiddleware = createEpicMiddleware();

// 应用thunk中间件
const storeEnhancer = applyMiddleware(thunk, sagaMiddleware, epicMiddleware);

// redux-devtools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(storeEnhancer);

const store = legacy_createStore(reducer, enhancer);

// sagaMiddleware.run(mySaga);
epicMiddleware.run(epic);

export default store;
