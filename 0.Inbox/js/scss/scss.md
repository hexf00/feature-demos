# scss

- 深度作用选择器
  - 解决 scoped css 不能作用到子组件的问题
  - 语法 `.parent >>> .sub`
    - 编译后`.a[data-random] .b`
    - 不加的编译结果`.a[data-random] .b[data-random]`
    - `/deep/`与`>>>`是相同含义的语法
  - 还可以使用`.module.css`解决
