// pages/home-music/index.js
import { getBanner, getSongList, getAllTopList, getListDetail } from '../../service/api_music'
import query from '../../utils/query-rect'
import debounce from '../../utils/debounce'

// 共享数据store
import { rankingStore } from '../../store/index'

// 防抖处理，立即执行第一次
const dbQuery = debounce(query, 0, true)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    banners: [],
    bannerHeight: 0,
    recommandSongs: [],
    hotSongList: [],
    topLists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPageData()
    // 热门歌单
    this.getHotRecommend()
    // 巅峰榜
    this.getTopList()
  },
  onUnload(){
    // rankingStore.offState('hotRanking')
  },  
  getPageData() {
    // 轮播图
    getBanner().then(res => {
      const { banners } = res
      this.setData({
        banners
      })
    })

    // 推荐歌曲
    getSongList().then(res => {
      const { playlists } = res
      this.setData({
        hotSongList: playlists
      })
    })
  },
  getHotRecommend() {
    // 共享数据store
    rankingStore.dispatch('getRankingDataAction')

    rankingStore.onState('hotRanking', (res) => {
      this.setData({
        recommandSongs: res
      })
    })
  },
  async getTopList() {
    const { list } = await getAllTopList()
    const topLists = list.slice(0, 3).map(item => ({
      id: item.id,
      name: item.name,
      coverImgUrl: item.coverImgUrl,
      playCount: item.playCount,
      playlist: []
    }))

    const topListPm = topLists.map(item => getListDetail(item.id))
    const SongLists = await Promise.all(topListPm)
    topLists.forEach((item, idx) => {
      item.playlist.push(...SongLists[idx].playlist.tracks.slice(0, 3))
    })

    this.setData({
      topLists
    })
  },
  handleImageLoaded() {
    dbQuery('.banner-img').then(res => {
      const { height } = res
      this.setData({
        bannerHeight: height
      })
    })
  },
  handleSearchLCick() {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  }
})