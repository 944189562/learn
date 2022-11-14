import {combineReducers} from 'redux'
import { combineEpics } from "redux-observable";

import {reducer as counterReducer} from './counter'
import {reducer as homeReducer} from './home'

import { fetchMultiEpic } from "./epic.js";


// function reducer(state = {}, action) {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action)
//   }
// }

const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
})

const epic = combineEpics(fetchMultiEpic)

export {
  reducer,
  epic
}