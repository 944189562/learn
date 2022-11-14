import {applyMiddleware, compose, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk]
const store = legacy_createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
))

export default store