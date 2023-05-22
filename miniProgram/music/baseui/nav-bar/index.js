// baseui/nav-bar/index.js
const appInstance = getApp()

Component({
  options: {
    multipleSlots: true
  },
  properties: {

  },
  data: {
    statusBarHeight: appInstance.globalData.statusBarHeight,
    navBarHeight: appInstance.globalData.navBarHeight
  },
  lifetimes: {
    ready() {
    }
  },
  methods: {
    handleBack() {
      wx.navigateBack()
    }
  }
})
