# js函数


* [避坑-JS删除数组的元素](js-delete-array-item)
* [思考-JS找出数组中重复元素](js-filter-array-repeat-item)

## minix

* `assign` 传参 `undefined` 不影响使用

  ```js
  Object.assign(undeined,{a:1},{b:1},undefined,null);
  ```

* 克隆对象，细节待补充

  ```js
  Object.assign({},obj1)
  ```

* 合并对象，细节待补充

  ```js
  Object.assign({},obj1,obj2)
  ```

  * **如果一个元素不添加空对象`{}`，实际上是将元素合并在obj1上。**
  * `obj1.x`和`obj2.x`如果都是对象，并不会按属性合并，而是直接使用引用覆盖，而非值克隆。
  * 合并规则从后往前合并

## 异步操作

* Promise <https://es6.ruanyifeng.com/#docs/promise>
* await和async <https://es6.ruanyifeng.com/#docs/async#%E9%A1%B6%E5%B1%82-await>
* callback

## 可迭代对象

* for...of，不能使用for和for...in
* Symbol.iterator 方法
* next 方法
* yield 语法

## 函数

* `fn.call(newThis, arguments...)` 改变`this`指针并调用
* `fn.apply(newThis, [arguments...])` 改变`this`指针并调用，参数以数组格式传入
* `fn.bind(newThis)` 改变`this`指针，返回一个新函数
* `arguments.callee` 函数指针，值是当前函数传入参数的所有者，相当于函数的`this`，可以用于函数名被重写或函数名不确定的情况
* `fn.caller` 函数指针，值是当前函数的调用者
* `arguments.callee.caller.arguments` 调用当前函数的函数的传入参数
* 参考
  * [《arguments.callee和caller的区别》@niulina](https://www.cnblogs.com/niulina/p/5701404.html)
  * [《call()、apply()、bind()的用法终于理解》@Shd-Study](https://www.cnblogs.com/Shd-Study/p/6560808.html)

## 流程控制

* 堆栈式调用
* 类型推导
* 管道/链式调用/普通调用
* 缓存
* 错误处理
  * 通用（全局）错误处理
  * 上一层错误处理
    * 抛出错误
* 异步流程控制
* 状态控制
  * 进度条
* 并发
  * 抛弃过期数据
  * 取消过期任务
* 防抖/节流
* 应用
  * 获取异步数据
  * 转换数据
