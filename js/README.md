# js函数

* [避坑-JS删除数组的元素](js-delete-array-item)
* [思考-JS找出数组中重复元素](js-filter-array-repeat-item)
* [避坑-JQ事件绑定](jq-event)
* [rxjs-study rxjs学习](rxjs-study)
* [g6-study g6学习demo](g6-study)
* [vue-tab 简易tabs控件](vue-tab)
* [Scheduler 事件监听器](Scheduler)

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

## 对象

* 几乎所有的 JavaScript 对象都是 Object 的实例；一个典型的对象继承了Object.prototype的属性（包括方法），尽管这些属性可能被遮蔽（亦称为覆盖）。
* `new constructor[([arguments])]`，可以不传递参数
  * 步骤
    1. 创建一个继承自 `constructor.prototype` 的新对象
       * 具体解释，创建一个空对象`{}`，将该对象`__proto__`属性指向`constructor.prototype`
    2. `this` 设置为 步骤1创建的对象
    3. 运行 构造函数`constructor`，内部是指定名称和属性
    4. 构造函数返回值 就是 `new` 表达式的结果，如果该函数没有返回值，默认返回`this`
  * 代码

    ```js
    var tom = { '__proto__': Cat.prototype }
    Cat.call(tom, 'tom')
    ```

  * 如果不使用 `new` 运算符，构造函数就是一个普通函数，不会创建一个新对象，this 的指向也不会改变。
  * `constructor.prototype`，`constructor.prototype.constructor`  都可以被人为改变
  * `constructor`和`constructor.prototype.constructor`可以不同，`construct`才会执行，另外一个不会被执行
* 参考
  * [运算符 new @MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
  * [属性 prototype @MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
  * [Object.create @MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
* `Object.create()` 实现类式继承，参数是原型对象，即`xx.prototype`

  ```js
  function SubClass() {
    ParentClass.call(this); // call super constructor.
  }
  SubClass.prototype = Object.create(ParentClass.prototype);
  SubClass.prototype.constructor = SubClass;
  ```

## 函数

* 函数有两种定义方式，一种是普通函数，一种是箭头函数
  * 区别1 箭头的函数的作用域被强行设置为fn定义时的`this`
  * 区别2 箭头函数不能直接读取自身`arguments`
* `Function()`构造函数 和 `eval()` 都可以动态创建函数，区别是执行的作用域，`Function`动态创建的函数可以用在全局作用域，但会有安全问题。
* `fn.call(newThis, arguments...)` 改变`this`指针并调用
  * 应用 `ParentClass.call(this)` 在子类构造函数调用父类构造方法
* `fn.apply(newThis, [arguments...])` 改变`this`指针并调用，参数以数组格式传入
* `fn.bind(newThis)` 改变`this`指针，返回一个新函数
* `arguments.callee` 函数指针，值是当前函数传入参数的所有者，相当于函数的`this`，可以用于函数名被重写或函数名不确定的情况
* `fn.caller` 函数指针，值是当前函数的调用者
* `arguments.callee.caller.arguments` 调用当前函数的函数的传入参数
* 将非数组装换为数组，拥有length属性即可 `Array.prototype.slice.apply(arguments)`
* 参考
  * [《arguments.callee和caller的区别》@niulina](https://www.cnblogs.com/niulina/p/5701404.html)
  * [《call()、apply()、bind()的用法终于理解》@Shd-Study](https://www.cnblogs.com/Shd-Study/p/6560808.html)
  * [Function @MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)

## 作用域

* JS中的 对象类型 对应 oop的类
* JS中的 对象实例 对应 oop的类的实例
* JS中的 对象类型共享属性 对应 oop的类静态方法
* `this.xx` 获取对象的属性
* `this.__proto__` 获取共享属性
* `fn.prototype` 访问和定义共享属性，改操作会影响所有的对象实例，不论实例化时机在修改前后

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
