// request
import { BASE_URL } from '../utils/constant'

class Request {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method,
        data: params,
        success: function (res) {
          const { statusCode, data } = res
          if (statusCode === 200) {
            resolve(data)
          } else {
            console.error(statusCode)
          }
        },
        fail: reject
      })
    })
  }

  get(url, params) {
    return this.request(url, 'GET', params)
  }

  post(url, params) {
    return this.request(url, 'POST', params)
  }
}

const request = new Request()

export default request