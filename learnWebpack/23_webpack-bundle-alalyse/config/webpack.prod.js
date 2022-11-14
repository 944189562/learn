const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const PurgeCssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const CompressionPlugin = require('compression-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolveApp = require("./paths");

const isProduction = true;

module.exports = {
  mode: "production",
  // devtool: 'source-map',
  externals: {
    lodash: "_",
    dayjs: "dayjs"
  },
  optimization: {
    usedExports: true,
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
    }),
    new PurgeCssPlugin({
      paths: glob.sync(`${resolveApp('./src')}/**/*`, {
        nodir: true
      }),
      safelist: function () {
        return {
          standard: ['body']
        }
      }
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/i,
      threshold: 0,
      minRatio: 0.8,
      algorithm: 'gzip'
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.+\.js/])
  ]
}