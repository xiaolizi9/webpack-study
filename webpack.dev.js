const smart = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = smart(baseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {},
    plugins: [
        new webpack.DefinePlugin({
            BASEURL: JSON.stringify('http://localhost:3000/api'),
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})