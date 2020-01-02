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
    plugins: [
        new WebpackCleanPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // 使用IgnorePlugin插件,防止在import或者require时,生成该正则表达式匹配的模块
        // resourceRegExp：匹配(test)资源请求路径的正则表达式。
        // contextRegExp：（可选）匹配(test)资源上下文（目录）的正则表达式。
        new webpack.IgnorePlugin({
            // 在momont模块中忽略引入的./locale路径资源
            resourceRegExp: /\.\/locale/,
            contextRegExp: /momont/
        })
    ],
    module: {
        noParse: /jquery/,   // 不去解析jquery的依赖关系,如果模块很大,并且知道该模块不依赖其他模块,可以使用noParse
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            'zh-cn': path.resolve(__dirname, 'node_modules/moment/locale/zh-cn.js')
        }
    }
}