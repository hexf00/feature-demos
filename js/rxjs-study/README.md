# rxjs学习笔记

* 文档 <https://rxjs.dev/guide/overview>

## 观察者模式

* 发布者（Publisher）
  * 负责产生事件
  * 通知观察者
  * 不关心事件被如何处理
* 观察者（Observer）
  * 负责处理事件
  * 接受事件
  * 不关心事件如何产生
* 观察者只能观察一个发布者
* 成为某个发布者的观察者，需要有显式的注册过程

概念含义总结

* 事件/数据/广播 实体
* 订阅者/观察者/Observer/subscriber 实体
* 发布者/Observable/订阅服务器/可被观察的对象/可被观察者 实体
* 产生/通知 过程，也可以没有这个过程，可以**直接调用**处理过程，就是通知和处理可以是同一个过程
* 处理/响应 过程，注册成为发布者时定义的函数体
* 注册/挂号/订阅/观察/subscribe 过程 成为某个发布者的观察者的过程，这个过程中会描述处理的过程

## 明确术语名词和基本概念

* [interface Observer](https://rxjs.dev/api/index/interface/Observer)
  * 拥有 `next`, `error`, `complete`，`closed` 方法，`closed`是可选的
* 被 `class Subscriber` 实现
* [interface Subscribable](https://rxjs.dev/api/index/interface/Subscribable)
  * 被 `cass Observable` 实现

* [class Observable](https://rxjs.dev/api/index/class/Observable)
  * `class Observable<T> implements Subscribable`
  * 发布者

* [class Subscriber](https://rxjs.dev/api/index/class/Subscriber)
  * `class Subscriber<T> extends Subscription implements Observer`
  * `Observable.create(subscribe)`中`subscribe`函数的参数
    * 每次`Observable.subscribe()`都会执行一次`subscribe`函数，每次传入的`subscriber`都是不同的，也是对应的观察者
    * 调用`Subscriber.next`方法等于是 调用观察者的next方法进行数据处理

* `Observable.create(subscribe?:  (this: Observable<T>, subscriber: Subscriber<T>) => TeardownLogic) : Observable`
  * 参数`subscribe`函数是可选的
  * 参数`subscribe`函数有一个参数`subscriber`，类型是`class Subscriber`
  * 每次`Observable.subscribe()`都会执行一次`subscribe`函数，每次传入的`subscriber`都是不同的，也是对应的观察者
  * 创建发布者

自定义概念

* `stream$`， 是 `Observable` 的具体实例
* `onSubscribe()`，描述订阅时干些什么，内部是完成**数据生产**和**通知观察者处理**的过程。 是 `Observable.create()` 的传入参数，见`Observable.create`中的`subscribe()`
* `observer`， 具体的观察者。是`onSubscribe()`函数的传入参数，见`class Subscriber`。

## `Observable.of(...args)` 与 `Observable.from(array)`

* 创建 `Observable`。
* `of` 每个参数都会执行一次`subscribe`
* `from` 会将数组元素分割执行，也额可以传递可迭代对象
* 接受额外参数`asapScheduler` 、 `asyncScheduler`  指定执行时机

## `Observable.create(onSubscribe)`

* 是`Observable`构造函数的别名
* 接受`onSubscribe`函数作为传入参数
* 每次`Observable.subscribe()`执行都会导致`onSubscribe()`被执行一次，在里面绑定dom事件是有问题的做法
* `onSubscribe()`的返回值可以是函数，这个函数会在`unsubscribe()`和`subscriber.complete()`时执行

## `Observable.subscribe()`

* 成为某个发布者的观察者的过程。
* 注意，没有订阅(`Observable.subscribe`)则订阅服务器(`subscriber`)不会被创建
* 参数可以时一个函数，也可以时一个包含next方法的对象

## 附录

* [可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)

## 奇思妙想

* 是否能够通过异步如Promise等方式获取到observer对象，之后在外部调用next？
  * 不可行，因为每次订阅都会产生新的observer对象，每次都代表着不同的观察者，通过Promise只能获取到第一个observer，要想正确通知观察者，需要获取到所有observer，获取使用数组保存是有意义的，但是这样的意义应该思考