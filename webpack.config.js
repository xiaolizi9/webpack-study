const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanPlugin = require('webpack-clean-plugin')

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
    }
}