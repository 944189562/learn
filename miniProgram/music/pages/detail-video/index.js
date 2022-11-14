// pages/detail-video/index.js
import { getMVURL, getMVDetail, getRelatedMV } from '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    mvUrlInfo: {},
    mvDetail: {},
    relatedMvs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id = '' } = options
    this.getPageData(id)
  },
  getPageData(id) {
    getMVURL(id).then(res => {
      this.setData({
        mvUrlInfo: res.data
      })
    })
    getMVDetail(id).then(res => {
      this.setData({
        mvDetail: res.data
      })
    })
    getRelatedMV(id).then(res => {
      this.setData({
        relatedMvs: res.data
      })
    })
  }
})