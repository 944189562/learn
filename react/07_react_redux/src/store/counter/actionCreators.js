import {ADD_NUMBER, SUB_NUMBER, INCREMENT_IF_ODD} from './constants.js'

export const addAction = num => ({
  type: ADD_NUMBER,
  num
})

export const subAction = num => ({
  type: SUB_NUMBER,
  num
})

export const incrementIfOdd = () => ({
  type: INCREMENT_IF_ODD
})