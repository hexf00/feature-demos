# 笔记

* `JSON.stringify(obj,null,2)` JSON序列化的时候同时格式化，美化缩进
* `edge.getModel()` 有不同的实现，如果`.get('model')`无法JSON序列化
* `graph.addItem` 方法不会重新布局，应该要提供x,y信息
* `graph.removeItem` 删除node会删除与node关联的edge
* 监听图数据的变化
  * `graph`事件 `afteradditem`/`afterremoveitem`/`afterupdateitem` 是由`graph`上的API触发的，`item`上的API不会触发
* 如何实现边唯一，边关系去重添加
  * 方法1，插入时，遍历edges关系集合，查出是否存在相同的数据，如`edges.find(edge => source == edge.source && target == edge.target)`
  * 方法2，插入前，获取target.edges关系集合，查出是否存在相同的数据，相比方法1，无论是否有缓存支持都因为缩小了范围效率更高

## 更新节点数据函数

| 方法                     | 自动绘制节点 | 重新计算边位置 | 触发事件                  |
| ------------------------ | ------------ | -------------- | ------------------------- |
| `graph.updateItem(item)` | √            | √              | `before/after updateitem` |
| `item.update()`          | ×            | ×              | ×                         |
| `item.updatePosition()`  | ×            | ×              | ×                         |

总结

* `item.update()` 和 `item.updatePosition()` 仅更新节点自身，不计算相关边的位置，且需要手动调用重绘函数，不会触发事件
* `graph.updateItem(item)`会计算节点边位置并重绘节点和相关边，会触发事件

说明

* 是否重新计算边位置，判断标准为调用`graph.paint()`后边位置是否有被更新
* `item`均为`node`，未测试`edge`的情况。

## 重绘函数

| 方法                       | 绘制节点 | 重新计算边位置 | 事件                                |
| -------------------------- | -------- | -------------- | ----------------------------------- |
| `graph.render()`           | √        | √              | `afteradditem`                      |
| `graph.paint()`            | √        | ×              | `before/after paint`                |
| `graph.refreshPositions()` | √        | √              | `before/after graphrefreshposition` |
| `graph.refreshItem(item)`  | √        | ×              | `before/after itemrefresh`          |
| `graph.refresh()`          | √        | √              | `before/after graphrefresh`         |
| `item.refresh()`           | ×        | ×              | ×                                   |

总结

* `graph.render()` 相当于重绘，性能最差。
* `item.refresh()` 内部调用`item.updatePosition()`,`item.updateShape()`,`item.afterUpdate()`,`item.clearCache()`,  `node.refresh()`没有反应。
* `graph.refreshPositions()` 和 `graph.refresh()` 同时绘制节点和节点关联的边位置
* `graph.refreshPositions()` 内部循环调用了 `node.updatePosition(model)` 和 `edge.refresh()`

* G6内部绘图使用`graph.autoPaint()`，当`autoPaint`状态为`True`调用`graph.paint()`。
* `autoPaint`可以通过`graph.setAutoPaint()`改变。
* `graph.paint()`内部调用的是`G.canvas.draw()`
* `graph.refreshItem(item)` 内部调用了 `item.refresh()` 和 `graph.autoPaint()`
* `graph.refresh()` 内部循环调用了 `item.refresh()` （所有的node和edge）

## 已知问题

* g6 多画布是删除选择节点无法判断要删除的是哪个图的节点
