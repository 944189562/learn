const redux = require('redux')

const initialState = {
  counter: 0
}

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: state.counter + 1}
    case 'DECREMENT':
      return {...state, counter: state.counter - 1}
    case 'ADD':
      return {...state, counter: state.counter + action.num}
    case 'SUB':
      return {...state, counter: state.counter - action.num}
    default:
      return state
  }
}

// store
const store = redux.legacy_createStore(reducer)

// 订阅store的修改
store.subscribe(() => {
  console.log('state changed: ', store.getState().counter)
})

// actions
const actions1 = {type: 'INCREMENT'}
const actions2 = {type: 'DECREMENT'}

const actions3 = {type: 'ADD', num: 5}
const actions4 = {type: 'SUB', num: 3}

// 派发action
store.dispatch(actions1)
store.dispatch(actions2)
store.dispatch(actions3)
store.dispatch(actions4)

