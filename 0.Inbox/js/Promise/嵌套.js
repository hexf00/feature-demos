var a = new Promise((ok, err) => { ok(1) }) //1
var b = Promise.all([a]) //[1]
var c = new Promise((ok) => ok(b)) //[1]
var d = new Promise((ok) => ok(c)) //[1]


//Promise 的嵌套是没有必要的，但没有副作用
d.then(d => console.log('d.then', d)) // [1]
