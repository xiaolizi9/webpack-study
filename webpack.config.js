const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    // devtool:生成源码映射,点击报错会查看到源码

    // source-map显示报错的内容以及在第几行写错的,会生成一个映射文件
    // devtool:'source-map',   //生产环境首选none或者source-map

    // eval-source-map显示报错的内容以及在第几行写错的,不会生成一个映射文件
    // devtool: 'eval-source-map',  //开发环境首选eval-source-map,初始化 source map 时比较慢，但是会在重新构建时提供比较快的速度，并且生成实际的文件。行数能够正确映射，因为会映射到原始代码中。它会生成用于开发环境的最佳品质的 source map。

    // cheap-module-source-map只会显示在第几行写错,并不会告诉你哪里写错,会生成一个映射文件
    // devtool:'cheap-module-source-map',

    // cheap-module-eval-source-map只会显示在第几行写错,并不会告诉你哪里写错,不会生成一个映射文件
    // devtool:'cheap-module-eval-source-map',
    output: {
        // [name]相当于是一个变量,把入口的所有文件依次替换进去
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "index.html"
        })
    ]
}