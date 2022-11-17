// components/song-menu-area/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [
        1, 2, 3, 4, 5
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleDetail(event) {
      const { id, name, coverImgUrl } = event.currentTarget.dataset
      console.log(event.currentTarget.dataset)
      wx.navigateTo({
        url: `/pages/detail-songs/index?id=${id}&name=${name}&coverImgUrl=${encodeURIComponent(coverImgUrl)}&type=songlist`,
      })
    },
    handleMore() {
      wx.navigateTo({
        url: '/pages/cat-list/index',
      })
    }
  }
})
