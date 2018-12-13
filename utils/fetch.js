import regeneratorRuntime from '../libs/runtime';
const globalUrl = 'https://api.i-shancan.com';
// 接口请求
const fetch = async ({ method = "GET", url, data = {}}) => {
  // 本地存储获取token
  const token = wx.getStorageSync("token");
  let header = {};
  // header设置token
  if (method == 'post') {
    header = {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  if (token) {
    header["Authorization"] = token;
  }
  // promise 封装 wx.request
  return await new Promise((resolve, reject) => {
    wx.request({
      method: method,
      url: `${globalUrl}${url}`,
      data: data,
      header: header,
      success: function (response) {
        // wx.hideLoading()
        // 接口返回 errcode 统一处理
        if (response.data.errcode == 0) {
          resolve(response.data.data)
        }else {
          reject(response)
        }
      },
      fail: function (response) {}
    })
  })
}

module.exports = {
  fetch: fetch
}