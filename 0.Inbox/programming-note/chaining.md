# 链式调用 chaining

* 实现原理
  * 返回`this`

* 执行顺序
  * 链式调用传参是回调函数的，则该函数完成只是注册功能
  * 链上的注册回调函数的函数的调用是立即执行，回调函数是延迟执行的
  * 具体的说`Promise`链上的所有`then`函数都会立即被执行，`then`的参数是延迟执行

* 特点
  * 可以处理事件回调，通过先注册时间，达到延迟执行的目的，继而简化代码层级
  * 节省代码量
  * 代码直观

* 实现案例
  * jQuery1.5版本引入Deferred功能，提供对AJAX方法的链式调用。
  * `Promise`

    * `.then(resolveFn,[rejectFn])`

    ```js
    Promise.resolve().then(()=>console.log('1')).then(()=>console.log('2'))
    ```

* 优势
  * 易读性、可维护性：添加动作可以不改变已有的代码结构
    * 维护动作: 添加动作

      * 传统代码

        改变了已有的代码结构，改变了代码易读性（因为插入代码的位置可能不同）

        ```js
        //原始代码
        // $.ajax("test.html")

        $.ajax({
            //done:()=>{}, //也可能插入在之前
            url:"test.html",
            done:()=>{}
        })
        ```

      * 链式代码

        ```js
        //原始代码
        //$.ajax("test.html")

        $.ajax("test.html")
        .done(()=>{})
        ```

    * 维护动作: 为已有动作追加动作
      * 传统代码

        传统方法改变已有的代码结构，改变量代码易读性（因为**不再能轻易判断不同动作的边界**）。

        如果将内部动作抽象成独立函数可以改善代码易读性，产生额外的维护成本。

        ```js
        //原始代码
        //$.ajax({
        //    url:"test.html",
        //    done:()=>{
        //        //动作1代码段或函数名
        //    }
        //})

        $.ajax({
            url:"test.html",
            done:()=>{
                //动作1代码段或函数名
                //动作2代码段或函数名
            }
        })
        ```

      * 链式代码

        ```js
        //原始代码
        //$.ajax("test.html")
        //.done(()=>{})

        $.ajax("test.html")
        .done(()=>{})
        .done(()=>{})
        ```

  * 易读性：清晰直观，属性和动作的代码分开，不需要在一堆属性中找方法，案例代码同上。

  * 易读性、可维护性：为多个操作指定同一个回调函数

    * 传统代码

      ```js
      $.ajax({
          url:"test1.html",
          done:()=>{}
      })
      $.ajax({
          url:"test2.html",
          done:()=>{}
      })
      ```

    * 链式代码

      ```js
      $.when($.ajax("test1.html"), $.ajax("test2.html"))
      .done(function(){console.log("success");})
      .fail(function(){console.log("error");});
      ```
