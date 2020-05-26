- `text-overflow: string` 自定义省略号内容只支持火狐
- `flex`布局和`absolute`布局之间存在冲突 #待验证 

## 双行省略显示

```css
div {
  display: -webkit-box; /*弹性伸缩盒子*/
  overflow: hidden;
  -webkit-line-clamp: 2; /*伸缩布局包含的文本行数*/
  -webkit-box-orient: vertical; /*子元素排列的方向*/
}
```

适用于 webkit，移动端展示。

- [demo](http://jsrun.net/UmYKp/edit)

  - 如果最少一行，最多两行，则需要制定行高，和高度

- [CSS - 纯 css 实现多行文本溢出省略（兼容所有浏览器）](https://segmentfault.com/a/1190000008921613)

- [纯 css 实现多行文本省略号](https://www.jianshu.com/p/3bce7924a466)

- [webpack 打包时把这个样式过滤掉了](https://www.cnblogs.com/web1/p/9486170.html)

  ```css
  /*! autoprefixer: off */
  -webkit-box-orient: vertical; /*子元素排列的方向*/
  /* autoprefixer: on */
  ```
