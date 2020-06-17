# echartsjs

- [论文](https://vis.baidu.com/paper/paper/)
- [博客](https://efe.baidu.com/tags/ECharts/)
- [ECharts 数据可视化实验室](https://vis.baidu.com/) 类似 antv
  - [图标规范](https://vis.baidu.com/chartusage/overview/)
- [ECharts 用户广场](https://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)
- [术语表](https://www.echartsjs.com/zh/cheat-sheet.html)
  - 12 基础组件
    - 标题(Title)
    - 图例(Legend)
      - plain/scroll
    - 提示框(Tooltip)
      - mousemove/click/none
    - 标注(MarkPoint)
    - 标线(MarkLine)
    - 标域(MarkArea)
    - 时间轴(Timeline)
    - 数据区域缩放(DataZoom)
    - 刷选(Brush)
      - 是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果。
    - 视觉映射(VisualMap)
    - 工具栏(Toolbox)
    - 自定义图形(Graphic)

## 关注点

- 事件处理
- [ECharts 可以在服务端进行渲染](https://www.echartsjs.com/zh/tutorial.html#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93)
- 通过`aria-label`attr 属性实现无障碍

## 参考资料

- ppt 分享，比论文更细节一点 [可视化了解一下？ ECharts 4.0 最全技术攻略](https://www.infoq.cn/article/baidu-echarts-4.0-strategy)

  - [浙大论文](https://www.sciencedirect.com/science/article/pii/S2468502X18300068#fig5)

- [ECharts4 差异](https://juejin.im/post/5a5da932f265da3e591e4901)

  - 移动端优化
    - 手指缩放、平移
  - ZRender 升级，支持 SVG，VML
    - VML 可以兼容低版本 IE
    - 数据的流加载支持
    - 增量渲染
    - 内存优化
    - SVG 渲染折线图和饼图的效率更高，而由于 Canvas 渲染矩形的效率很高，所以柱状图使用 Canvas 渲染的效率高于 SVG。
    - 解决问题
      - 大体积文件的传输耗时
      - 几千万的数据处理导致的浏览器卡顿阻塞
      - 无法实时重绘所有图形
      - 大数据存储在浏览器上后过高的内存占用会导致 GC
  - [关于 ECharts4 新增的数据集（dataset）](https://juejin.im/post/5a60430bf265da3e2a0da291)

    - 从 4.0 开始，ECharts 支持了单独的数据集声明，从而数据可以单独管理，被多个组件复用
    - 二维表，key-value 等多种格式, TypedArray 格式
      - TypedArray 在大数据量的存储中可以占用更少的内存，对 GC 友好。
      - TypedArray 是一种通用的固定长度缓冲区类型，允许读取缓冲区中的二进制数据。
    - 使用 dataset 可以不做复杂的 series 指定

- [ECharts @掘金](https://juejin.im/user/58cb54ac1b69e6006b708ca5/posts)

- [ZRender](https://ecomfe.github.io/zrender-doc/public/)

  - 提供了矩形、圆形、扇形、多边形、折线段、贝赛尔曲线等十多种基本图形
  - 矢量化管理图形
  - 支持图形直接的组合与剔除
  - 以 Canvas、SVG 或 VML 的形式输出
  - 支持交互处理
  - 通过 zrender/core/PathProxy 管理矢量图形
  - 通过 zrender/Handler 事件代理层实现 封装了不同平台的事件处理机制
    - 具体机制是 mousemove 时 findHover 函数去找当前触发的元素
      - 通过 storage.getDisplayList 来维护一个可见形状列表，findHover 只检索可见数据
      - 先通过 isOutsideBoundary 监测是否需要判断形状位置
    - 底层鼠标事件映射到图形层面的事件
      - 例如能够获取到鼠标悬停在图形上的事件

- [写些我的职业生涯中关于 canvas 的总结 @dfmlcq](https://juejin.im/post/5e1ab4a95188254db475e59a)
  - 非零绕组的实现
  - 分层渲染
    - 解决节点拖拽的性能问题
  - 隐藏文字
    - 解决布局和缩放时的性能问题
  - 力引导布局的精度调整
  - 离屏缓存
  - 渐进式渲染
  - 使用四叉树减少算法复杂度
  - Barnes Hut 算法
  - 使用 web worker
    - 处理向量计算

## 高级

- [详细介绍如何计算两条折线的交点并使用 Echarts 展示以及图表美化](https://juejin.im/post/5dfa3f5b6fb9a01620798fb3)

## 案例

- [阿里 DataV 也在使用 echarts](https://yq.aliyun.com/articles/106656)

## 其它

- [浙江大学可视分析小组博客](http://www.cad.zju.edu.cn/home/vagblog/)

## 性能优化

- [appendData](https://www.echartsjs.com/zh/api.html#echartsInstance.appendData)
  - 在大数据量（百万以上）的渲染场景，appendData 接口提供了**分片加载**后**增量渲染**的能力，渲染新加入的数据块时不会清除原有已经渲染的部分。
  - 可通过`progressive: 0`关闭渐进式渲染
  - dataset 不支持渐进式渲染
  - 支持的版本有
    - 基础版本
      - 散点图（scatter）
      - 线图（lines）
    - GL
      - 散点图（scatterGL）
      - 线图（linesGL）
      - 可视化建筑群（polygons3D）
