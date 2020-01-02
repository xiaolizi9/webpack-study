const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    resolve: {
        // 告诉 webpack 解析模块时应该搜索的目录,使用绝对路径，将只在给定目录中搜索。如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules搜索。
        modules: [path.resolve(__dirname, 'node_modules')],
        // 别名
        alias: {
            bootstrap: 'bootstrap/dist/css/bootstrap.css',
            '@': path.resolve(__dirname, 'src')
        },
        // 省略扩展名,自动解析确定的扩展
        extensions: ['.js', '.css', '.json']
        // 在 package.json 中使用哪个字段导入模块,比如只导入bootstrap的css可以这样配
        // mainFields: ['style', 'main'],
        // 解析目录时要使用的文件名,不常用
        // mainFiles:['index']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/index.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }
}