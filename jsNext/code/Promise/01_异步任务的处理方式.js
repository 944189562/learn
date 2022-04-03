/*
* 这种回调有很多弊端：
* 1> 需要按照固定格式进行使用
* 2> 第三方库的使用，需要按照别人的写法进行使用
* */
// request.js
function requestData(url,sucessCb, failtureCb) {
  // 模拟网络请求
  setTimeout(() => {
    if(url === 'url') {
      sucessCb('success')
    } else {
      failtureCb('error')
    }
  }, 3000)
}

requestData('url', function (msg) {
  console.log(msg)
},function (msg) {
  console.log(msg)
})