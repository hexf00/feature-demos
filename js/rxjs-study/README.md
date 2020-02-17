# rxjs学习笔记

* 文档 <https://rxjs.dev/guide/overview>

## `of` 与 `from`

* 创建 `Observable`。
* `of` 每个参数都会执行一次`subscribe`
* `from` 需要传入一个[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
* 接受额外参数`asapScheduler` 、 `asyncScheduler`  指定执行时机

## `Observable.subscribe`

订阅。
