# 链式调用

* 目的
  * 处理事件回调
* 实现
  * jQuery1.5版本引入Deferred功能，提供对AJAX方法的链式调用。
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
