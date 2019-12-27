
const fn = () => {
    console.log('这是一个函数')
}
fn()

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

var b = new Point('x值','y值');
console.log(b)

@testable
class MyClass {};

function testable(target) {
    target.isTestable = true;
}

MyClass.isTestable;  // true