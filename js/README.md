# js函数

* `moment("1995").fromNow()//25年前` 返回人性化的时间
  * `moment().diff(time, 'seconds') < 44` 注意，如果44秒内，都会展示为数秒前，时间显示并不一定符合我们的期望，所以需要作额外处理
* `moment().diff("2020-02-24", 'seconds')//82375` 返回某个时间距离现在的秒数

## DOM操作细节

* file的onchange oninput ，如果想要同一个文件重复执行，需要手动将value设置为空

## 性能优化技术

* setTimeout 延迟执行
* Worker 多线程，无法与DOM交互
  * [Web Worker 使用教程 @ruanyifeng](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

## 对象

* `hasOwnProperty('key')` 判断对象是否包含特定的自身（非继承）属性，比直接判断好，避免出错
  * [hasOwnProperty @MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

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

## 数组

* ES6 中 `Array.of()` 和 `Array()` 作用一致，区别是`Array(number)`的用法是建立一个长度为`number`的数组
* reduce `[1,2,3,4].reduce((total,item,index,arr)=>{console.log(total,item,index,arr);return total+item;})`
  * `index`从1开始，如果数组元素只有一个，则不执行`funciton`
  * `total`在第一次执行时是第一个元素，后面执行时是当前函数的返回值，所以用`a,b`也是合理的
    * 上面理解或许不对 ，`reduce(item,next)`的理解也是合理的，不过item从第二次开始变成了返回值，但是index从1开始说明这么理解是不合理的
    * 但`sort(next,item)`的理解是合理的，sort没有第三个参数
  * 和 `sort` 函数一样，第二个参数才是当前的元素，第1个参数是index+1的元素，同样少执行长度是length-1
  * `reduce` 接受两个参数，第二个参数可以指定第一次传递的是什么值

    ```js
    [1,1,2,3,4].reduce((item,next,index)=>{console.log(item,next,index);return item;},[])
    ```

* 如何转换可迭代对象/类数组到数组
  * 名词解释
    * **类数组**指是 有`length`属性的**对象** ，详细定义见[](https://tc39.es/ecma262/#sec-lengthofarraylike)、[createlistfromarraylike](https://tc39.es/ecma262/#sec-createlistfromarraylike)
      * 如`arguments`
      * `apply`接受的参数要求是类数组
      * 字符串虽然有`length`，也可以使用下标访问字符，但不符合类数组的定义
    * **可迭代对象**，也说是**符合迭代器协议**，可迭代对象的含义是实现了`[Symbol.iterator]`属性的对象
      * 如`arguments`、字符串类型
  * ES6展开语法
    * 展开语法要求被操作对象是**可迭代对象**
    * `[...likeArray]`、`Array.of(...likeArray)`
    * `{...obj}` 也是合理用法
      * `{a:1,...obj}` 可以合并对象
  * apply方式
    * `apply`要求第二个参数是类数组（见`CreateListFromArrayLike`），传递可迭代对象无效，
    * 调用数组构造方法，this为新数组，将要处理的类数组作为参数传递
      * `Array()` 因为该构造函数有两种使用方式，所以不适合
      * `Array.of()`

  * apply方式调用数组实例方法，this 为 要处理的类数组
    * `Array.prototype.slice`
    * `Array.prototype.concat`不能应用在传入参数有数组的情况，则数组会被concat合并成元素，造成数据错误
* 参考
  * [《javascript中数组和类数组对象（Array-like Object）的区别？》 @sf](https://segmentfault.com/q/1010000016511236)

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
  * 什么时候用到箭头函数
    * 需要保留当前的this作用域
      * 丢失this作用域 `_.throttle(this.saveToLocalStorage,100)`
      * 改写后 `_.throttle(() => this.saveToLocalStorage(),100)`
* `Function()`构造函数 和 `eval()` 都可以动态创建函数，区别是执行的作用域，`Function`动态创建的函数可以用在全局作用域，但会有安全问题。
  * eval也可以访问全局作用域
  * 有时候出错，两种方式堆栈都没有代码打印出来，但是console会显示代码
* `fn.call(newThis, arguments...)` 改变`this`指针并调用
  * 应用 `ParentClass.call(this)` 在子类构造函数调用父类构造方法
* `fn.apply(newThis, [arguments...])` 改变`this`指针并调用，参数以数组格式传入
* `fn.bind(newThis)` 改变`this`指针，返回一个新函数
* `arguments.callee` 函数指针，值是当前函数传入参数的所有者，相当于函数的`this`，可以用于函数名被重写或函数名不确定的情况
* `fn.caller` 函数指针，值是当前函数的调用者
* `arguments.callee.caller.arguments` 调用当前函数的函数的传入参数
* 将 `arguments` 转化为数组 `[...arguments]`
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
* 事件管理器
  * [js实现on emit](https://www.cnblogs.com/aisiqi-love/p/10594461.html) 原理是 注册回调到对象数组，事件触发循环调用数组元素
* 防抖（debounce）/节流（debounce）
  * 节流 将指定时间长度内的多次动作变成1次动作执行
  * 防抖 动作触发后等待指定时间长度，没有第2次动作则动作执行
  * 参考 [Lodash之throttle（节流）与debounce（防抖）总结 @dreamsqin](https://www.cnblogs.com/dreamsqin/p/11305028.html)
* 应用
  * 获取异步数据
  * 转换数据

## 模块化写法

* Asynchronous Module Definition (AMD)  `define()` 浏览器中使用，如jquery
* CommonJS `module.exports`+`require()` Node.js在用
* UMD ,整合AMD+CommonJS的兼容写法
* ES6模块写法 `export` `import` 关键字
  * TS也采用这种
  * 可以使用这种，JS使用打包工具处理
* 为什么这么多种，也是历史发展的原因
* require 是不同于import的
  * require是运行时的，是一个函数，值传递
  * import是编译时，是一个语法，引用传递
* 参考：[JS通用模块模式 UMD @lightsong](https://www.cnblogs.com/lightsong/p/10353278.html)

## 参考

* [一些函数式的技巧让JS代码更优雅](https://zhuanlan.zhihu.com/p/20708731)
  * 内容摘要
  * [《JS 函数式编程指南》](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
  * `_.memoize` 缓存函数返回值
  * `_.flatten` 解构多维数组
  * `_.once` 实现单例模式，函数只会被调用一次
