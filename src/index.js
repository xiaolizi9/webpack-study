import math from './math'
// const math = require('./math')

// ES6的import是按需加载的,专业名词叫tree-shaking,意思是自动删除没用的树叶,但是使用commonJS的require则不会,而且使用require还会把得到的math放在default这个对象里面
console.log(math.add(1,2))
// console.log(math.default.add(1,2))

let a = 1
let b = 2
let c = a + b
console.log(c)  // 在webpack的production中会输出console.log(3),简化代码,专业名词叫scope hosting 作用域提升