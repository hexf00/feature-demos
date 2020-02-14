# js函数

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

## 可迭代对象

* for...of，不能使用for和for...in
* Symbol.iterator 方法
* next 方法
* yield 语法

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
