const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanPlugin = require('webpack-clean-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        // 显示进度条
        progress: true,
        // 启用热更新功能
        hot: true
    },
    plugins: [
        new WebpackCleanPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // 热更新模块
        new webpack.HotModuleReplacementPlugin(),
        // 这个模块可以告诉我们是哪个文件发生了变化
        new webpack.NamedModulesPlugin()
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