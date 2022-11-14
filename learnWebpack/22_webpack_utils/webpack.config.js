const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'coderjz_utils.js',
    // AMD/CommonJS(2)/ESM，打包输出文件支持这些规范
    libraryTarget: 'umd',
    // 导出全局变量名称
    library: 'coderjzUtils',
    // this => window globalThis
    globalObject: 'this'
  }
}