// pages/cat-list/index.js
import { getCatList, getSongList } from '../../service/api_music'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentType: '',
    catList: [],
    songList: [],
    hasMore: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPageData()
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  async onReachBottom() {
    console.log('滚动到底部~')
    console.log(this.data.songList)
    this.getSongList(this.data.currentType, this.data.songList.length)
  },
  async getPageData() {
    const { tags } = await getCatList()
    const catList = tags.map(item => ({
      id: item.id,
      name: item.name
    }))

    this.setData({
      catList,
      currentType: catList[0].name
    }, () => {
      this.selectComponent('#tabs').resize()
      this.getSongList(this.data.currentType, this.data.songList.length)
    })

  },
  async getSongList(type, offset) {
    if (!this.data.hasMore && offset !== 0) {
      return
    }
    wx.showNavigationBarLoading()

    const { cat, playlists, more = true } = await getSongList({ cat: type, limit: 12, offset })
    let newData = playlists
    if (offset > 0) {
      newData = [...this.data.songList, ...newData]
    }

    this.setData({
      currentType: cat,
      songList: newData,
      hasMore: more
    }, () => {
      wx.hideNavigationBarLoading()
    })
  },
  handleDetail(event) {
    const { id, name, coverImgUrl } = event.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/detail-songs/index?id=${id}&name=${name}&coverImgUrl=${encodeURIComponent(coverImgUrl)}&type=songlist`,
    })
  },
  handleChangeTab(event) {
    const { title } = event.detail
    if (title === this.data.currentType) return
    this.setData({
      songList: []
    })
    this.getSongList(title, 0)
  }
})