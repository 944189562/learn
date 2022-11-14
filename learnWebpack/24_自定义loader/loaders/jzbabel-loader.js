const babel = require('@babel/core')

module.exports = function(content) {
  // 获取传入的参数
  const options = this.getOptions()

  const cb = this.async()

  // 对源码转化
  babel.transform(content, options, (err, result) => {
    if(err) {
      cb(err)
    } else {
      cb(null, result.code)
    }
  })
}