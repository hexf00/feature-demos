function customPromise(callback) {
    var that = this;
    this.funs = [];

    this.then = function (callback) {
        console.log("!!!")
        that.funs.push(callback)
        return that
    }

    this.resolve = function () {
        let fn = that.funs.shift()
        fn.apply(that, [that.resolve].concat([...arguments]))
        return that
    }

    callback(this.resolve)

    return this
}



var test1 = new customPromise((resolve) => {
    console.log(123)
    setTimeout(() => {
        resolve(789)
    }, 1000)

    // 这里执行会出错
    //   resolve(789)
    console.log(456)
});

test1.then((resolve, data) => {
    setTimeout(() => {
        resolve(456)
    }, 1000)
});

test1.then((resolve, data) => {
    console.log(data)
});
