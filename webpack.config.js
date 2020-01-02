const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        // [name]相当于是一个变量,把入口的所有文件依次替换进去
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        // 1. 启用代理跨域
        // proxy: {
        //     // 只要是请求/api开头的都会被代理到http://localhost:3000
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         // 重写/api路径,比如访问http://localhost:8080/api/user,则会被代理到http://localhost:3000/user
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }

        // 2. mock模拟数据,单纯的想模拟数据,不存在跨域
        // 在服务内部的所有其他中间件之前,提供执行自定义中间件的功能,before是一个钩子函数。
        // before(app) {
        //     app.get('/api/user', (req, res) => {
        //         res.json({
        //             data: '我是mock模拟的数据'
        //         })
        //     })
        // }
        // 3. 有服务端,但是不用代理来处理,在服务端内部启一个webpack模块,端口用服务端的端口,这样也不会存在跨域,详见server.js
    },
    // 监控代码变化,实时打包
    watch: true,
    // watch选项
    watchOptions: {
        // 每秒检查一次变动
        poll: 1000,
        // 在重构前增加延迟0.5秒,停止更改代码后的0.5秒进行打包
        aggregateTimeout: 500,
        // 排除文件夹
        ignored: /node_modules/
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "index.html"
        }),
        new CleanWebpackPlugin()
    ]
}