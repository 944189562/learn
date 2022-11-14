const { HYEventStore } = require("hy-event-store")
const axios = require("axios")

// 创建Store对象
const store = new HYEventStore({
  state: {
    // 本地数据
    name: "why",
    age: 18,
    // 网络数据
    banners: [12, 23],
    recommends: []
  },
  actions: {
    // 发送网络请求
    getHomeDataAction(ctx, payload) {
      axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
        ctx.banners = res.data.data.banner.list
        ctx.recommends = res.data.data.recommend.list
      })
    }
  }
})

// app启动
store.dispatch("getHomeDataAction", 123)

// page1页面
// store.onState("name", (res) => {
//   console.log(res)
// })

store.onState("banners", (res) => {
  console.log("page1:", res)
})

// page2页面
// setTimeout(() => {
//   store.setState("name", "kobe")
// }, 1000);
store.onState("banners", (res) => {
  console.log("page2:", res)
})
