# Scheduler 事件监听器

自定义事件监听管理

* `scheduler = new Scheduler()` 创建事件监听
* `scheduler.on(event, (val...)=>{console.log(val)})` 监听事件
  * 支持传入多值
* `scheduler.emit(event, val...)` 触发事件
* 支持链式调用
