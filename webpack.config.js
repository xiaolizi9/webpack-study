const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanPlugin = require('webpack-clean-plugin')

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        other: './src/other.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: { //优化项
        splitChunks: {  //抽取公共代码(分隔代码块)
            cacheGroups: {  //缓存组
                commons: {   //普通模块(自己写的文件)
                    minSize: 0, //大于0字节就分隔
                    minChunks: 2,   //最小共用两次再分隔
                    chunks: 'initial',   //从入口处就开始提取代码,
                    name: 'commons'    //文件名字
                },
                vendor: {   //第三方模块
                    test: /node_modules/,   //正则,匹配模块
                    minSize: 0,
                    minChunks: 2,
                    chunks: 'initial',
                    priority: 1,    //优先级,必须设置,不然会把第三方模块当做普通模块打包.因为执行顺序是先上后下
                    name: 'vendor'
                }
            }
        }
    },
    // devtool: 'source-map',
    devServer: {
        open: true,
        // 显示进度条
        progress: true
    },
    plugins: [
        new WebpackCleanPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}