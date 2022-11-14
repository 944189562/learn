

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    compress: true,
    proxy: {
      // '/api': 'http://localhost:8888'
      '/api': {
        target: 'http://localhost:8888',
        pathRewrite: {
          '^/api': ''
        },
        secure: false,
        changeOrigin: true
      }
    },
    historyApiFallback: true
  }
}