# UI

## UI 框架(偏框架)

- vue
- angular
- react

## UI 工具(偏专一类型的库)

- ztree
- [toastr @CodeSeven](https://github.com/CodeSeven/toastr)
  - [在线 demo](https://codeseven.github.io/toastr/demo.html)
  - success/info/warning/error 4 个方法
  - 连续触发有点卡卡的
  - 不能保持界面上仅仅有一个提示
- layer
- moment 人性化显示时间

  ```html
  <script src="https://cdn.staticfile.org/moment.js/2.24.0/moment.js"></script>
  <script src="https://cdn.staticfile.org/moment.js/2.24.0/locale/zh-cn.js"></script>
  ```

- lodash 通用函数库
- echarts/g2
  - echarts 在性能优化上明显比 g 系列高几个档次
- g6
- normalize.css 统一不同浏览器的差异
- ace_editor 代码编辑器，echarts/KodExplorer 在用

## UI 框架（偏全面）

- Bootstrap
  - 提供 css 和 jq 插件，也有各种 mvvm 的实现，有 2、3、4 版本
- layui
  - 基于 jq
- [b-jui](http://www.b-jui.com/)
  - 基于 jq
- [element](https://element.eleme.cn/)

  - [组件文档](https://element.eleme.cn/#/zh-CN/component/installation)

- pure.css
  - 只有栅格、表格、表单等基本样式
- ant-design

## 设计技术细节

- 路由守卫 可以做什么

  - 阻止路由，用于权限判断
  - 延迟路由，用于数据加载后再跳转
  - 重写路由

- 页面跳转体验

  当页面发生跳转时，需要重新获取数据，这个步骤可能是异步的。

  - 先执行路由跳转，再开始获取数据

  - 获取完数据后，再执行路由跳转
    - 需要 组件路由守卫 的支持

  两者共同点

  - 数据获取期间，显示进度条或加载提示
  - 数据获取失败，都需要展示一些全局的错误提醒

  从技术角度讲，两种方式都不错 —— 就看你的用户想要的体验是哪种。

  参考：[数据获取 @VueRouter](https://router.vuejs.org/zh/guide/advanced/data-fetching.html)

- [Animate.css](https://animate.style/)
  - down 表示从上到下的动画，如红包冲天而降
  - tada 左右晃动表示醒目，如开红包
  - animate 可以拆开使用
