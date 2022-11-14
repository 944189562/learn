const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "my-loader01",
            options: {
              name: "jz",
              age: 18,
            },
          },
          {
            loader: "jzbabel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      // {
      //   test: /\.js$/,
      //   use: 'my-loader02',
      //   // enforce: 'post'
      // },
      // {
      //   test: /\.js$/,
      //   use: 'my-loader03'
      // },
      {
        test: /\.md/,
        use: [
          // "html-loader",
          "jzmd-loader"
        ],
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "loaders")],
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
