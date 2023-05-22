// app.js
App({
  globalData: {
    screenHeight: 0,
    screenWidth: 0,
    statusBarHeight: 0,
    navBarHeight: 44,
    deviceRadio: 0
  },
  async onLaunch() {
    const info = wx.getSystemInfoSync()
    this.globalData.screenHeight = info.screenHeight
    this.globalData.screenWidth = info.screenWidth
    this.globalData.statusBarHeight = info.statusBarHeight
    this.globalData.deviceRadio = info.screenHeight / info.screenWidth
  },

})
