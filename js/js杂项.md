# js 杂项

* JS中时间字符串怎么理解？
  * T time开始，用空格区分日期时间也一样
  * Z Zone时区
    * 有则表示UTC时间
    * 没有会当作是本地时间
  * [ECMA标准参考 时间](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)
  * JSON序列化后会保存UTC时间。
