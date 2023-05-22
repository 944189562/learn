// pages/home-music/index.js
import { getBanner, getSongList, getAllTopList, getListDetail } from '../../service/api_music'
import query from '../../utils/query-rect'
import debounce from '../../utils/debounce'

// 共享数据store
import { rankingStore, RankingMap } from '../../store/index'

// 防抖处理，立即执行第一次
const dbQuery = debounce(query, 0, false)

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
  onUnload() {
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
      if (!res.id) return
      const ranking = { ...res, playlist: res?.playlist?.slice(0, 6) }
      this.setData({
        recommandSongs: ranking
      })
    })

    rankingStore.onState('soarRanking', this.getTopList())
    rankingStore.onState('newRanking', this.getTopList())
    rankingStore.onState('originalRanking', this.getTopList())
  },
  getTopList() {
    return res => {
      if (!res.id) return
      const ranking = { ...res, playlist: res?.playlist?.slice(0, 3) }
      const topLists = [...this.data.topLists, ranking]

      this.setData({
        topLists
      })
    }
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
  },
  handleHotSong() {
    this.navigateToSongsDetail(RankingMap[3])
  },
  handleRanking(event) {
    const idx = event.currentTarget.dataset.idx
    this.navigateToSongsDetail(RankingMap[idx])
  },
  navigateToSongsDetail(ranking) {
    wx.navigateTo({
      url: `/pages/detail-songs/index?ranking=${ranking}&type=ranking`,
    })
  }
})