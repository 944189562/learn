const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

class MyPlugin {
    apply(compiler) {
        console.log('MyPlugin 启动')
        // 清除js注释，在 emit 钩子资源文件输出之前
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            // compilation => 打包上下文
            for (const name in compilation.assets) {
                // console.log(name)
                if (name.endsWith('.js')) {
                    const content = compilation.assets[name].source()
                    const withoutComments = content.replace(/\/\*\*+\*\//g, '')
                    compilation.assets[name] = {
                        source: () => withoutComments,
                        size: () => withoutComments.length
                    }
                }
            }
        })
    }
}


module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        // publicPath: 'dist/'
    },
    devtool: 'eval ',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        proxy: {
            '/api': {
                target: 'https://api.github.com',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /.md$/,
                use: [
                    'html-loader',
                    './md-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 用于生成 index.html
        new HtmlWebpackPlugin({
            title: 'Webpack Plugin Sample',
            meta: {
                viewport: 'width=device-width'
            },
            template: './src/index.html'
        }),
        // 用于生成 about.html
        new HtmlWebpackPlugin({
            filename: 'about.html'
        }),
        // new MyPlugin()
        // 开发阶段最好不要使用这个插件，开销大，上线前使用
        // new CopyWebpackPlugin(['public'])
    ]
}