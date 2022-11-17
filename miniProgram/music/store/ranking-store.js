import { HYEventStore } from 'hy-event-store'
import { getRankings, getAllTopList, getListDetail } from '../service/api_music'

const RankingMap = { 0: 'soarRanking', 1: 'newRanking', 2: 'originalRanking', 3: 'hotRanking' }
const rankingStore = new HYEventStore({
  state: {
    soarRanking: {},
    newRanking: {},
    originalRanking: {},
    hotRanking: {}
  },
  actions: {
    async getRankingDataAction(ctx, payload = { limit: 50 }) {
      const { limit } = payload
      const { list } = await getAllTopList()
      const topLists = list.slice(0, 4).map(item => ({
        id: item.id,
        name: item.name,
        coverImgUrl: item.coverImgUrl,
        playCount: item.playCount,
        playlist: []
      }))

      const topListPromises = topLists.map(item => getListDetail(item.id, limit))

      for (const [idx, item] of topListPromises.entries()) {
        const res = await item
        ctx[RankingMap[idx]] = { ...topLists[idx], playlist: res.songs }
      }
    }
  }
})

export {
  rankingStore,
  RankingMap
}