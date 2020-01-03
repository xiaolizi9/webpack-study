const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanPlugin = require('webpack-clean-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 5000,
        open: true,
        // 显示进度条
        progress: true,
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new WebpackCleanPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // 引用模块时,先去任务清单中找,找不到再打包模块
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dist', 'manifest.json')
        }),
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