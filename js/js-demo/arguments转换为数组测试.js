// 参考 [将arguments转换成数组的方法 @forjuan](https://www.cnblogs.com/AliceX-J/p/5400568.html)

// 数组拓展运算符
// 原理：ES6语法
var fn1 = function () {
    //[Function: values]
    // console.log(arguments[Symbol.iterator])
    return [...arguments]
}

// Array.from
// 原理：ES6语法
var fn2 = function () {
    return Array.from(arguments)
}

// Array.of ES6构造方法
// 原理： 改变 构造方法 的 this 为 一个新数组，同时传递参数
var fn3 = function () {
    // Array.of(arguments) //不可行，因为该方法是公共方法，需要作用于数组对象实例
    return Array.of.apply([], arguments)
}

//Array构造函数，如果传递一个参数且类型是整数，则会返回该整数长度的数组，不符合需求
// Arary有两种用法 Array(5) 返回指定长度的空数组 Array(1,2,3) 返回数组
// 原理： 改变 构造方法 的 this 为 一个新数组，同时传递参数
var fn4 = function () {
    if (arguments.length == 1) {
        return [arguments[0]]
    } else {
        // Array.apply(arguments) //不可行，因为该方法是公共方法，需要作用于数组对象实例
        return Array.apply([], arguments)
    }
}

// slice是截取数组， arr.slice(startIndex, endIndex)，不传递参数则返回完整数组
// 原理： 改变 数组对象实例 的 this 为 要处理的类数组
var fn5 = function () {
    return Array.prototype.slice.apply(arguments)
}

// concat是连接数组，arr.concat(arr2,arr3...) 不传递参数则返回完整数组
// 原理： 改变 数组对象实例 的 this 为 要处理的类数组
var fn6 = function () {
    // 如果有参数是数组，会被转换成参数
    // 如传入参数是一个空数组，concat调用时会concat([]) 所以该参数被改变
    // 不合适的方法
    return Array.prototype.concat.apply([], arguments)
};





[
    fn1(),
    fn2(),
    fn3(),
    fn4(),
    "----",
    fn1(1),
    fn2(1),
    fn3(1),
    fn4(1),
    "----",
    fn1("1"),
    fn2("1"),
    fn3("1"),
    fn4("1"),
    "----",
    fn1(1, 2, []),
    fn2(1, 2, []),
    fn3(1, 2, []),
    fn4(1, 2, []),
    fn5(1, 2, []),
    fn6(1, 2, []),

].map(it => console.log(it))
