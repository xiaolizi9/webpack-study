const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',    // 模式,分为development和production模式
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'dist')  //必须为绝对路径
    },
    // devServer默认取src下的index.js做为入口
    devServer: {
        port: 5000,
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
    ],
    module: {
        rules: [
            // loader的顺序：先下后上，先右后左
            {
                test: /\.css$/,
                use: [
                    // 用对象写法可以传入options选项
                    // 把.css文件插入到style标签中
                    {
                        loader: 'style-loader',
                        // options: {
                        // insert貌似已经废除,不起作用,原先的作用是加在style的顶部,用于让index.html中的样式覆盖
                        //     insert: 'body'
                        // }
                    },
                    // 解析.css文件中的@import语法
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // 用对象写法可以传入options选项
                    {
                        loader: 'style-loader',
                    },
                    'css-loader',
                    // 把.scss文件转换成.css文件
                    'sass-loader'
                ]
            }
        ]
    }
}