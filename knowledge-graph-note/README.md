# knowledge-graph-note

知识图谱技术相关笔记。

知识图谱相关概念提出较久，也发展了很多年。
初略了解，该领域拥有的规范和格式定义比较多，也有一些大组织发布的标准，学术和商业使用的技术亦有差异。

## 基础概念

* [词语/word](word.md)
  * 语言的构成元素
  * 语言是可以逻辑不明确的

    比如说“森林里开大会，小兔子和小老虎来参加”这句话，并没有指明兔子和老虎有多少只。

* 节点/node
  * 图的构成元素
* [实体/entity/resource](entity.md)
* 类别/概念/category/class
  * 如何为实体定义类别？
  * 已知人类可以作为一种类别的概念，如果把人类细分，还可以按国别分，按种族分等等
* 关系/edge/link
  * 图的构成元素
* 属性

## 思维概念

* 结构化
* 线性
* 网状
* 树状

## TODO

* 了解商业解决方案
* 收集和阅读相关标准文档
* 总结各词性概念
* 补足以前的碎片思考记录

## 资源

* <http://www.openkg.cn/> 提供数据集、工具两方面的资源和实践指导
* <http://openbase.openkg.cn/> 提供数据集

## 工具

* 数据库
  * Sesame
  * [Apache Jena](http://jena.apache.org/) 三元组数据库 #待研究

    A free and open source Java framework for building Semantic Web and Linked Data applications.
  * Neo4j 图数据库
* 自然语言处理工具
  * Jiagu
  * Jieba
* 可视化工具
  * 分析工具
    * InteractiveGraph
  * 可视化引擎
    * G6
* 格式
  * N-Triple
  * turtle
* 三元组
* RDF

## 应用

* 数据可视化
* 数据集众包平台
  * <http://openbase.openkg.cn/> 提供数据集
* [搜索引擎](app/searcher.md)
* 问答机器人
* [叙事类作品(小说、动漫)数据结构化](app/narrative-struct-data.md)
* 医疗行业用途
  * [新冠病毒相关开放知识图谱](https://mp.weixin.qq.com/s/Qv_FC1bbJFh6ZswMLit9rA)
* 概念图

## 入门参考

* [知识图谱（Knowledge Graph）简介 @Explaliner](https://zhuanlan.zhihu.com/p/45470163) 发展和技术细节简要

## 附录

* [图解向·《范畴篇》讲什么 @李展发](https://zhuanlan.zhihu.com/p/41249692)
* 奇思异想：知识图谱界有没有关于知识图谱的知识图谱？3
* 属性与关系的区别？
* 为什么节点非得存在resource、class两种类型？而不是1种或者3种？

  1种肯定是不够的，不然无法区别节点之间的差异。
  但是这个人的职业和人种，应该如何理解呢？A是医生，B是老师，也可以理解医生和老师可以作为职业的实体。
  这时候就存在 自然人和职业两种实体共存，但事实上他们是**弱关联**，如何区分这两种实体呢？
  如果这时候可以给实体标注class，这个问题就解决了。
  A 人实体 的 职业属性 是医生 职业实体 ，或者 A 人实体 的 与 医生 职业实体 的关联是职业。
