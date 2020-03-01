# UI

## UI工具(偏专一类型的库)

* ztree
* [toastr @CodeSeven](https://github.com/CodeSeven/toastr)
  * success/info/warning/error 4个方法
  * 连续触发有点卡卡的
  * 不能保持界面上仅仅有一个提示
* layer

## UI框架（偏全面）

* Bootstrap
  * 提供css和jq插件，也有各种mvvm的实现，有2、3、4版本
* layui
  * 基于jq
* [b-jui](http://www.b-jui.com/)
  * 基于jq
* [element](https://element.eleme.cn/)
* pure.css
  * 只有栅格、表格、表单等基本样式
* ant-design

## 设计技术细节

* 路由守卫 可以做什么
  * 阻止路由，用于权限判断
  * 延迟路由，用于数据加载后再跳转
  * 重写路由

* 页面跳转体验
  
  当页面发生跳转时，需要重新获取数据，这个步骤可能是异步的。
  
  * 先执行路由跳转，再开始获取数据

  * 获取完数据后，再执行路由跳转
    * 需要 组件路由守卫 的支持

  两者共同点
  
  * 数据获取期间，显示进度条或加载提示
  * 数据获取失败，都需要展示一些全局的错误提醒

  从技术角度讲，两种方式都不错 —— 就看你的用户想要的体验是哪种。

  参考：[数据获取 @VueRouter](https://router.vuejs.org/zh/guide/advanced/data-fetching.html)

| Bootstrap | 提供css和jq插件，也有各种mvvm的实现，有2、3、4版本 |
| element ||