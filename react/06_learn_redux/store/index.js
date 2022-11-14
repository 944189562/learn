import {legacy_createStore} from 'redux'
import reducer from "./reducer.js";

const store = legacy_createStore(reducer)

function patchLogging(store) {
  let next = store.dispatch

  function dispatchAndLog(action) {
    console.log('dispatching: ', action)
    next(action)
    console.log('new state：', store.getState())
  }

  return dispatchAndLog
}

function patchThunk(store) {
  let next = store.dispatch

  function dispatchAndThunk(action) {
    if(typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }

  return dispatchAndThunk
}

// store.dispatch = patchLogging(store)
// store.dispatch = patchThunk(store)

function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice()

  middlewares.forEach(middleware => {
    store.dispatch = middleware(store)
  })
}

applyMiddleware(store, [patchLogging, patchThunk])

export default store