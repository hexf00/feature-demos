// 测试assign特性

console.log(Object.assign({ a: { a: 1 } }, { a: { b: 1 } })); //输出{ a: { b: 1 } }

var a = { a: { a: 1 } }
var b = { a: { b: 1 } }
var c = Object.assign({}, a, b);
c.a.b = 2;
console.log(a, b, c);//{ a: { a: 1 } } { a: { b: 2 } } { a: { b: 2 } }

