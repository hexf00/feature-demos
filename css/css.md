# css

## 双行省略显示

```css
div {
  display: -webkit-box; /*弹性伸缩盒子*/
  overflow: hidden;
  -webkit-line-clamp: 2; /*伸缩布局包含的文本行数*/
  -webkit-box-orient: vertical;/*子元素排列的方向*/
}
```

适用于webkit，移动端展示。

- [CSS - 纯css实现多行文本溢出省略（兼容所有浏览器）](https://segmentfault.com/a/1190000008921613)

- [纯css实现多行文本省略号](https://www.jianshu.com/p/3bce7924a466)
