import { HYEventStore } from 'hy-event-store'
import { getSongDetail, getLyric } from '../service/api_player'
import parseLyric from '../utils/parseLyric'

const playerStore = new HYEventStore({
  state: {
    currentSong: {},
    lyric: [],
  },
  actions: {
    playMusicWithSongAction(ctx, { id }) {
      getSongDetail(id).then(res => {
        ctx.currentSong = res.songs[0]
      })

      getLyric(id).then(res => {
        const lyricString = res.lrc.lyric
        const lyric = parseLyric(lyricString)

        ctx.lyric = lyric
      })
    }
  }
})

const audioContext = wx.createInnerAudioContext()

export {
  playerStore,
  audioContext
}