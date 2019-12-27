const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',    // 模式,分为development和production模式
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
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            // loader的顺序：先下后上，先右后左
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ],
                            plugins: [
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                ["@babel/plugin-proposal-class-properties", { "loose": true }]
                            ]
                        }
                    }
                ]
            }
        ]
    }
}