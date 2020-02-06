# vue-tabs

 简单的tabs，参考[element](https://github.com/ElemeFE/element/tree/master/packages/tabs/src)

![vue-tab控件演示](https://i.loli.net/2020/02/06/gPUB5iQbFd9OxR2.gif)

## 后续

* 如何实现tab标签页面的动态添加和变化，使用场景如权限限制、标签页控制

## 笔记

* 为什么不支持写法 `<tab active="tab1">` 、 `<tab :active="'tab1'">`

  如果要支持，需要进行如下操作：
  1. 如果要支持这种写法就需要在tab组件中添加状态变量 `active_local`
  2. 使用watch对props数据 `active` 进行监听然后复制给 `active_local` 
  3. computed属性 `active_c` 的操作对象 从对 props数据 `active` 改为对 data数据 `active_local` 的操作
  
  可见数据流转逻辑变得复杂，增加了代码量。

  且从常规逻辑理解，数据是单向流转，父组件刷新子组件的状态，也就是父组件props属性是常量，子组件内不应该被切换，违背了常规逻辑，额外增加了理解和沟通成本。

  好处是可以像HTML一样写不需要在Vue实例中定义变量。

  综上，为了一个语法糖增加了很多不必要的维护成本，是不划算的。

* 为什么不支持写法 `<tab :active="active">` 

  数据应单向流转，子组件内如果需要改变父组件数据需要通过事件机制，否则违背了常规逻辑。

* `v-model` 和 `v-bind:active.sync` 本质是相同类型的语法糖。
