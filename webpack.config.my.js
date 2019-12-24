const path = require('path')

module.exports = {
    mode: 'development',    // 模式,分为development和production模式
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')  //必须为绝对路径
    }
}