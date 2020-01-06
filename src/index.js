const btn = document.createElement('button')

btn.innerHTML = '点击我懒加载js文件'

btn.addEventListener('click', () => {
    import('./source').then(data => {
        console.log(data.default)
    })
})

document.body.appendChild(btn)