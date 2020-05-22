# js 杂项

- JS 中时间字符串怎么理解？

  - T time 开始，用空格区分日期时间也一样
  - Z Zone 时区
    - 有则表示 UTC 时间
    - 没有会当作是本地时间
  - [ECMA 标准参考 时间](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)
  - JSON 序列化后会保存 UTC 时间。

- 热更新、热替换 HMR

  - 热更新的粒度更加细致，实现技术难度更高

- [译 JavaScript️ 可视化：js 引擎](https://juejin.im/post/5e23c3195188254dc3198b2d)

- [解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

- [使用 forEach、some、every、find、findIndex 的正确姿势](https://www.jianshu.com/p/91d740ad0ab9)

- ios 中将日期格式转为 date 对象，需要把`-`替换为为`/`
