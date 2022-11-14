const resolveApp = require('./paths')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const prodConfig = require('./webpack-prod')
const devConfig = require('./webpack.dev')

const commonConfig = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolveApp('./build'),
  },
  resolve: {
    // 指定别名
    alias: {
      '@': resolveApp('./src'),
    },
    // ... 默认扩展
    extensions: ['.ts', '...'],
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      template: './public/index.html',
    }),
  ],
}

module.exports = function (env) {
  const isProduction = env.production
  console.log(isProduction)
  // babel.config.js 文件中不能获取到 NODE_ENV，设置process.env.production
  process.env.NODE_ENV = isProduction ? 'production' : 'development'
  return isProduction
    ? merge(commonConfig, prodConfig)
    : merge(commonConfig, devConfig)
}
