import {
  ADD_NUMBER,
  SUB_NUMBER
} from './constants.js'

export const addAction = num => ({
  type: ADD_NUMBER,
  num
})

export const subAction = num => ({
  type: SUB_NUMBER,
  num
})

export const fetchAction = (dispatch, getState) => {
  dispatch(addAction(1))
  console.log(getState().counter)
}