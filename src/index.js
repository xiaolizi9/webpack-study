import source from './source'
console.log(source)

if (module.hot) {
    module.hot.accept('./source.js', () => {
        // 此处用require,因为视频中说import只能写在页面顶端
        const str = require('./source')
        console.log(str)
        // 但是我发现下面这种写法也是可以的
        // import('./source').then(res => {
        //     console.log(res)
        // })
    })
}
