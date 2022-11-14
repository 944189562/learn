// pages/home-video/index.js
import { getTopMV } from '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.getTopMV()

    // const { data, hasMore } = await getTopMV()
    // this.setData({
    //   topMVs: data,
    //   hasMore
    // })
  },
  async onPullDownRefresh() {
    await this.getTopMV()
    wx.stopPullDownRefresh()
  },
  async onReachBottom() {
    console.log('滚动到底部~')
    this.getTopMV(this.data.topMVs.length)
  },
  async getTopMV(offset = 0) {
    if (!this.data.hasMore && offset !== 0) {
      return
    }
    wx.showNavigationBarLoading()
    const { data = [], hasMore = true } = await getTopMV(offset)
    let newData = data
    if (offset > 0) {
      newData = [...this.data.topMVs, ...data]
    }
    this.setData({
      topMVs: newData,
      hasMore
    }, () => {
      wx.hideNavigationBarLoading()
    })
  },
  handleToDetail(event) {
    const id = event.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`,
    })
  }
})