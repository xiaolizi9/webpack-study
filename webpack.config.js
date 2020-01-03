const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanPlugin = require('webpack-clean-plugin')
const HappyPack = require('happypack')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        open: true,
        // 显示进度条
        progress: true
    },
    plugins: [
        new WebpackCleanPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new HappyPack({
            id: 'js',
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            ]
        }),
        new HappyPack({
            id: 'css',
            use: ['style-loader', 'css-loader']
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'HappyPack/loader?id=js'
            },
            {
                test: /\.css$/,
                use: 'HappyPack/loader?id=css'
            }
        ]
    }
}