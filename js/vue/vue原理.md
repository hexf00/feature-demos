# vue 原理

## 关键

- 改写对象
- 依赖收集
- 响应触发

## vue2

- 通过 Object.defineProperty()改写了对象的 getter/setter，完成依赖收集和响应触发

## vue3

- Vue 3.0 的响应式系统是独立的模块
- reactivity.global.js
  - VueObserver
    - reactive()
      - 将对象转化为 Proxy 对象，Vue2 使用的是`Object.defineProperty()`
    - effect()
      - 注册响应式回调
      - 在 effect 内部修改 Proxy 属性，首先会触发 key 为该属性的 getter，然后再触发 setter - [一张图理清 Vue 3.0 的响应式系统](https://juejin.im/post/5d9da45af265da5b8072de5d)

## 参考

- [Proxy @MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
