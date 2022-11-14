const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AutoUploadPlugin = require("./plugins/autoUploadPlugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin(),
    new AutoUploadPlugin({
      host: "121.5.70.248",
      username: "root",
      password: "",
      remotePath: '/root/test'
    }),
  ],
};
