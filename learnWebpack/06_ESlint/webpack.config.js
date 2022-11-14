const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

// 导出配置信息
module.exports = {
  mode: 'development',
  // entry: './src/main.js',
  entry: './src/index.js',
  // commonjs 打包，查看源码
  // entry: './src/cjs.js',
  // esm 打包，查看源码
  // entry: './src/esm.js',
  // esm导入cjs，cjs导入esm
  // entry: './src/esm_cjs.js',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build'),
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
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
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
        ],
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        // type: 'asset/resource', // file-loader
        // type: 'asset/inline', // url-loader
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name][hash:6][ext]',
        },
      },

      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // 下面的内容可以抽取到单独的文件
            // options: {
            // presets: [
            //   ['@babel/preset-env', {
            //     targets: 'chrome 88'
            //   }]
            // ]
            // }
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      // 编译ts
      // {
      //   test: /\.ts$/,
      //   use: 'ts-loader'
      // }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'coderzyp webpack',
      template: './public/index.html',
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html', '**/abc.txt'],
          },
        },
      ],
    }),
  ],
};
