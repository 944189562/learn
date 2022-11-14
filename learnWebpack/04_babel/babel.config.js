module.exports = {
  presets: [
    ['@babel/preset-env', {
      // false 不使用任何polyfill相关代码
      // usage 代码中用到那些，就去引用那些
      // entry
      useBuiltIns: 'usage',
      corejs: 3
    }],
    ['@babel/preset-react']
  ]
}