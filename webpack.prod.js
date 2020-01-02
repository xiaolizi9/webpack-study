const smart = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = smart(baseConfig, {
    mode: 'production',
    // 优化
    // optimization: {
    //     // 覆盖默认压缩工具
    //     minimizer: []
    // },
    plugins: [
        new webpack.DefinePlugin({
            BASEURL: JSON.stringify('http://www.baidu.com/api'),
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})