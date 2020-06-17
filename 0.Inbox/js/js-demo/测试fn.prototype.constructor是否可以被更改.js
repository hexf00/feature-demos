// 测试 fn.prototype.constructor 是否可以被更改
// 结论：更改后无效

var Cat = function (name) {
    console.log(123, name)
}

// true
console.log(Cat === Cat.prototype.constructor)

Cat.prototype.constructor = function (name) {
    console.log(456, name)
}

//false
console.log(Cat === Cat.prototype.constructor)

//456不会被执行
//true
console.log(new Cat('tom') instanceof Cat)