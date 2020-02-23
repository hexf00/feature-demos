# Promise

* Promise是ES6中添加的**处理异步操作**的一个工具
* Promise是可以使用纯JS实现的
* Promise的**本质**是 **对异步操作的回调函数的提前注册**，并非链式调用，使用非链式调用也可以实现`Promise`
* 如果只是用到延迟运算的特性，可以定义函数并手动调用
* `then()`返回一个全新的Promise对象，Promise是Thenable对象（提供then方法的对象）
* 在 ECMAScript 2017 标准中, 时序组合可以通过使用 async/await 而变得更简单

## 实践

* 避免没有必要的嵌套 Promise
* 记得用 catch 终止链
* Promise 的嵌套是没有必要的，但也是没有副作用的
* Promise 对象不是函数，不能使用`()`执行，`then()`也并非执行的意思，而是注册在改对象状态变成完成时所执行的函数
* 链条上任意位置catch后，如果该catch函数不返回Promise.reject()，会导致后面Promise对象继续允许，末端catch无法捕捉到错误
  * 非末端catch 记得返回`Promise.reject(err)`，防止逻辑错误
  * 这就导致末端一定要由catch终止链条

## 用法

* `Promise.all(iterable)`
* `Promise.race(iterable)`
* `Promise.reject(reason)`
* `Promise.resolve(value)`
* `Promise.prototype.catch(onRejected)`
* `Promise.prototype.then(onFulfilled, onRejected)`
  * 如果只转递一个参数则是成功时的执行
  * 永远异步执行
* `Promise.prototype.finally()`
  * 使用场景 `.finally(function() { isLoading = false; });`

## 参考

* [Using_promises @MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises)
* [Promise @MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [promise.js @ygm125](https://github.com/ygm125/promise/blob/master/promise.js)
