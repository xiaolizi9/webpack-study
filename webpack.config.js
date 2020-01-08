const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader:'./my-loader/bind-to-on-loader.js'
                    }
                ]
            }
        ]
    }
}