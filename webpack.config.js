const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

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
    // 优化项,webpack4新增
    optimization: {
        // 自己理解:minimizer覆盖默认的优化
        minimizer: [
            new TerserJSPlugin({
                // 是否缓存
                cache: true,
                // 是否并发打包
                parallel: true,
                // 是否源码映射,方便调试
                sourceMap: true
            }),
            // 压缩css
            new OptimizeCssAssetsPlugin()
        ],
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
        }),
        new miniCssExtractPlugin({
            filename: 'index.css'
        }),
    ],
    module: {
        rules: [
            // loader的顺序：先下后上，先右后左
            {
                test: /\.css$/,
                use: [
                    // 使用miniCssExtractPlugin的loader把打包后的css文件通过link标签插入到index.html中
                    miniCssExtractPlugin.loader,
                    // 解析.css文件中的@import语法
                    'css-loader',
                    // 引入postcss-loader并且创建postcss.config.js文件
                    'postcss-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // 使用miniCssExtractPlugin的loader把打包后的css文件通过link标签插入到index.html中
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    // 引入postcss-loader并且创建postcss.config.js文件
                    'postcss-loader',
                    // 把.scss文件转换成.css文件
                    'sass-loader'
                ]
            }
        ]
    }
}