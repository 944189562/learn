const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

// 导出配置信息
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // assetModuleFilename: 'images/[name].[hash:6][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: 'css-loader', // 写法一
        // use: 'css-loader', // 写法二
        // 写法三
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
          // 重复，可以配置 postcss.config.js
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         // require('autoprefixer'),
          //         // require('postcss-preset-env')
          //         'postcss-preset-env', // 简写方式
          //       ]
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[hash:6].[ext]',
              // outputPath: 'img',
              limit: 100 * 1024
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
  ]
}