# jq 事件相关

## 推荐实践

* `when`+`then`+`fail`+`always`

## 方法

* jQuery1.5版本引入Deferred功能，`$.ajax()`返回对象`jqXHR`是`XHR`的超集，提供了`error()`、`success()`、`complete()`，在1.8版本取消了这些方法，试用`fail()`、`done()`、`alawys()`代替
* jq也提供`then()`方法，和`done`有差异
  * `then()`会将返回值传递给下一个`then()`，`done`不会传递返回值
  
## hover

* `hover`非原生事件，无法作用在`on`、`bind`方法，`hover`只能作用在已经存在的元素
* `hover` 实现是 `mouseenter` 和 `mouseleave`
* `mouseenter` 与 `mouseleave` 的判断边缘是事件绑定的元素边缘，在子元素之间移动不会重复触发事件。
* `mouseover` 与 `mouseout` 的判断便于是事件绑定元素的任意元素便于，子元素之间的移动会均会触发对应事件。

## 绑定与注销事件

* 原生事件绑定方式包括两种：HTML或DOM元素的onXX属性(等价)、addEventListener
* `addEventListener`绑定事件如果使用的是匿名函数或无法获取绑定时使用的函数，事件将无法解除绑定
* jq使用`addEventListener`和`removeEventListener`管理事件
* 最新版本jq推荐所有事件绑定使用`on`， `off`
* `on`和`delegate`可以将事件绑定在未来添加的元素，其它不行，如`click`、`bind`
* `off`和`unbind`效果等价，均可以移除由`on`、`bind`、`delegate`和其它方法添加的事件。
* `off`和`unbind`等其它jq方法无法移除原生API `addEventListener` 绑定的事件
* `undelegate`只能作用`delegate`添加的事件，无法作用`on`、`bind`添加的事件
* Chrome CLI API `getEventListeners(dom)`可以获取到元素的属性，`getEventListeners(dom).click.forEach((e)=>dom.removeEventListener(e.type,e))`可以移除`addEventListener` 绑定的事件

## 比较：额外参数与子选择器

* `bind`与`on`异同

  * `bind`的第二个可选参数是额外数据，使用`e.data`获取，只能对已有元素有效
  * `on`的第二个可选参数是子选择器，对未来添加的元素生效，第3个可选参数是额外数据

* `on`与`delegate`异同
  
  * `delegate`的第一个参数不是事件，是子选择器
  * 都是第三个参数是额外数据

* `live`和`die`

  * 可以对未来添加的元素生效
  * 在1.9被移除

## 事件执行顺序

* 父子层级顺序，子元素先执行，父元素事件后执行，原理：冒泡模型
* 事件绑定顺序，先绑定先执行
* 特别说明，`delegate`和使用子选择器的`on`实际上是绑定在父元素上的，先绑定也会在普通事件的后面执行

## 参考

* [事件参考文档](https://www.runoob.com/jquery/jquery-ref-events.html)
