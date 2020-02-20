// 模拟new运算符

function customNew(fn) {
    var obj = { '__proto__': fn.prototype }
    //  为什么这里改变为箭头函数 执行结果就发生变化
    return function () {
        fn.apply(obj, arguments)
        return obj
    }
}

function Cat(name) {
    //构造函数只会被执行一次
    if (name) {
        this._name = name
    }

    this.getName = function () {
        return this._name
    }
}

var tom = { '__proto__': Cat.prototype }
Cat.call(tom, 'tom')
console.log(tom, tom.getName())

var tom2 = customNew(Cat)('tom')
console.log(tom2, tom2.getName())

var tom3 = new Cat('tom')
console.log(tom3, tom3.getName())


//true,true,true
console.log(tom instanceof Cat, tom2 instanceof Cat, tom3 instanceof Cat)