import {Map} from 'immutable'

import * as actionTypes from './contants'

const defaultState = Map({
  currentSong: {},
  currentSongIndex: 0
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    default:
      return state
  }
}

export default reducer