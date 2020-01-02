const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        // [name]相当于是一个变量,把入口的所有文件依次替换进去
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    // 监控代码变化,实时打包
    watch: true,
    // watch选项
    watchOptions: {
        // 每秒检查一次变动
        poll: 1000,
        // 在重构前增加延迟0.5秒,停止更改代码后的0.5秒进行打包
        aggregateTimeout: 500,
        // 排除文件夹
        ignored: /node_modules/
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "index.html"
        })
    ]
}