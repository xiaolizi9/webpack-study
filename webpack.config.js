const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        other: './src/other.js'
    },
    output: {
        // [name]相当于是一个变量,把入口的所有文件依次替换进去
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "index.html",
            // chunks是代码块,表示把入口的哪些文件注入当前html文件中
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "other.html",
            chunks: ['other']
        })
    ]
}