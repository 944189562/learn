import store from './store/index.js'
import {addAction, fetchAction, subAction} from './store/actionCreators.js'

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addAction(10))
store.dispatch(subAction(5))

store.dispatch(fetchAction)