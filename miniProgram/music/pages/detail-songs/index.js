// pages/detail-songs/index.js
import { rankingStore } from '../../store/index'
import { getListDetail } from '../../service/api_music'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '',
    ranking: '',
    name: '',
    coverImgUrl: '',
    playlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { type, ranking, id, name, coverImgUrl } = options
    this.setData({
      type
    })
    if (type === 'ranking') {
      this.setData({
        ranking
      })

      rankingStore.onState(ranking, (res) => {
        if (!res.id) return
        const { name, coverImgUrl, playlist } = res

        this.setData({
          name,
          coverImgUrl,
          playlist
        })
      })
    } else if (type === 'songlist') {
      getListDetail(id, 50).then(res => {
        this.setData({
          name,
          coverImgUrl: decodeURIComponent(coverImgUrl),
          playlist: res.songs
        })
      })
    }

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    rankingStore.offState(this.data.ranking)
  }
})