const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

const isProduction = true;

module.exports = {
  mode: "production",
  devtool: 'source-map',
  externals: {
    lodash: "_",
    dayjs: "dayjs"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          mangle: true,
          toplevel: true
        }
      }),
      new CssMinimizerWebpackPlugin({
        parallel: true
      })
    ]
  },
  plugins: [
    // 生成环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css"
    })
  ]
}