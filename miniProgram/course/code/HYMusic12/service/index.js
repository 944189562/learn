const BASE_URL = "http://123.207.32.32:9001"

// 用我已经部署好的
const LOGIN_BASE_URL = "http://123.207.32.32:3000"
// 用我给你的登录服务器代码,自己部署
// const LOGIN_BASE_URL = "http://localhost:3000"

class HYRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  request(url, method, params, header = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseURL + url,
        method: method,
        header: header,
        data: params,
        success: function(res) {
          resolve(res.data)
        },
        fail: reject
      })
    })
  }

  get(url, params, header) {
    return this.request(url, "GET", params, header)
  }

  post(url, data, header) {
    return this.request(url, "POST", data, header)
  }
}

const hyRequest = new HYRequest(BASE_URL)

const hyLoginRequest = new HYRequest(LOGIN_BASE_URL)

export default hyRequest
export {
  hyLoginRequest
}
