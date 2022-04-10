// 低版本 加前缀
// const autoprefixer = require('autoprefixer')
// import 合并
const atImport = require('postcss-import')
// 压缩
// const cssnano = require('cssnano')
// cssnext 过期
// const cssnext = require('cssnext')
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    // autoprefixer(),
    atImport,
    // cssnano
    // cssnext
    postcssPresetEnv()
  ]
}