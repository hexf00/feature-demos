# dom 细节

- [非 IE 无找到当前 focus 焦点的 API](http://www.imooc.com/wenda/detail/566897)
  - 但可以通过事件模拟，即 focus 时候记录激活的元素，blur 改变状态即可 [参考](https://stackoverflow.com/questions/3328320/jquery-alternative-for-document-activeelement)

## 移动端拖拽图标时候禁止滚动

```js
//禁止页面滑动
stop(){
      var mo=function(e){passive: false ;};
      document.body.style.overflow='hidden';
      document.addEventListener("touchmove",mo,false);//禁止页面滑动
  },
//取消滚动限制
move(){
      var mo=function(e){passive: false };
      document.body.style.overflow='';//出现滚动条
      document.removeEventListener("touchmove",mo,false);
}
```

[js 禁止/允许页面滚动](https://segmentfault.com/a/1190000020535844?utm_source=tag-newest)

如果是实现图标的拖拽则不应该使用 passive，会导致 preventDefault 无效，反而不能阻止滚动。

应用场景：vconsole

- 捕获模式(capturing) ,又称为“滴流模式”(trickling)

- 冒泡模式(bubbling)

可以改变事件的触发顺序。

[白话解释 Javascript 事件 preventDefault,stopPropagation 及 return false 的区别](https://segmentfault.com/a/1190000008227026)

[passive 的作用和原理](https://blog.CSDN.net/w993263495/article/details/85009761)

- addEventListener 与 removeEventListener 第三个参数 是不是要保持一样 #待验证
