import { HYEventStore } from 'hy-event-store'
import { getRankings } from '../service/api_music'

const rankingStore = new HYEventStore({
  state: {
    hotRanking: {}
  },
  actions: {
    getRankingDataAction(ctx, payload = { limit: 6 }) {
      const { limit = 6 } = payload
      getRankings(limit).then(res => {
        ctx.hotRanking = res.result
      })
    }
  }
})

export {
  rankingStore
}