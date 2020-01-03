const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        // react入口以react和react-dom模块作为入口
        react: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '_dll_[name].js',
        // 动态连接库的变量名
        library: '_dll_[name]',
        //默认为var,也可以使用commonJS规范,就变成exports了
        // libraryTarget: 'var'    
    },
    plugins: [
        // 配置动态连接库
        new webpack.DllPlugin({
            name: '_dll_[name]',   // 此处的name必须和output.library完全相同,这样才能在任务清单中找到这个变量
            path: path.resolve(__dirname, 'dist', 'manifest.json')
        })
    ]
}