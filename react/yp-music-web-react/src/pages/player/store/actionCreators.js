import * as actionTypes from './contants'
import {getSongDetail} from '@/services/player'

const changeCurrentSongAction = res => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: res
})

export const getCurrentSongAction = idx => {
  return dispatch => {
    getSongDetail(idx).then(res => {
      console.log('getCurrentSong: ', res)
    })
  }
}