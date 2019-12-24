const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',    // 模式,分为development和production模式
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'dist')  //必须为绝对路径
    },
    devServer: {
        port: 5000,
        contentBase: path.resolve(__dirname, 'dist'),
        // 是否压缩
        compress: true,
        // 是否显示进度条
        progress: true,
        // 是否自动打开浏览器
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                // 去掉多余空格,变成一行
                collapseWhitespace: true,
                // 去掉双引号
                removeAttributeQuotes: true
            },
            // 给引用的index.js加上hash戳,防止缓存
            hash: true
        })
    ]
}