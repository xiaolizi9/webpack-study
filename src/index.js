// Generator函数
function* gen() {
    yield 'one'
}
console.log(gen().next())

function* genTwo() {
    yield 'two'
}
console.log(genTwo().next())

// ES7数组的includes方法
// @babel/polyfill会在数组原型上添加Array.prototype.includes
require("@babel/polyfill");
const arr = ['小栗子','中栗子','大栗子']

console.log(arr.includes('小栗子'))