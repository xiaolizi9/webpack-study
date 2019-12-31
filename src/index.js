import imgUrl from './log.png'
console.log(imgUrl)
const img = new Image()
img.src = imgUrl
document.body.appendChild(img)

require('./index.css')