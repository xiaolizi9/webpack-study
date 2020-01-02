const express = require('express')
const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')

const app = express()

// 引入webpack的配置文件
const config = require('./webpack.config')

// 获取webpack处理配置文件后的结果
const compiler = webpack(config)

// 交给中间件去处理,然后再交给app去使用
app.use(middleware(compiler))

app.get('/user', (req, res) => {
    res.json({
        name: '小栗子',
        age: 18
    })
})

app.listen(3000, () => {
    console.log('监听3000端口,没有/api')
})