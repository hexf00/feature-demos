# vue笔记

* prop,data 可以是一个类,但是会被监听
* [$createElement()](https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0) 用来创建Dom,可以被更方便的JSX代替

## 使用细节

* 不能直接在data上增加属性，即不允许动态添加根级响应式属性。
  * [参考](https://segmentfault.com/q/1010000008472683)

## 组件与数据流、响应式

* 在往一个响应式对象上添加新属性时需要使用vue.set方法
  * 因为普通方式追加新属性，不会触发vue的响应式，注：已有属性的改变是会触发的
* **如果watch的对象引用不发生改变，则$emit不会导致watch被触发**
  * 场景：上层传递对象给下层输入控件修改
  * 细节：如果上层传递的是数组，则子组件中push、splice操作后，无需$emit就会导致watch被触发
    * 细节： 修改数组中的对象的值不会导致watch被触发
    * 如果上层没有传递，是undefined，则子组件中push、splice操作，会触发watch，但因为没有$emit，也没有引用，所以上层依然不能拿到组件更改后的数据
  * 总结：watch用于监听上层数据的改变

* 如果子组件只需要传值，不需要校验，能不能直接**使用对象的引用特性**直接改变上层数据，可以提升性能？
  * 场景：输入控件
  * 导致两个问题
  
    1. **上层必须传递值**，不能传递null和undefined，否则就算当前组件初始化了一个默认值，因为上层没有引用的缘故，无法完成响应式，**依然需要使用$emit通知上层更新**
    2. **上层必须保证引用不丢失**，data函数只会在组件初始化时候执行一次，引用丢失时会导致上层数据改变无法通知到当前组件，无法完成响应式，**则依然需要手工watch**

       * 改变了整个数据会导致引用丢失
       * `JSON.parse(JSON.stringify())` 会导致引用丢失

## 组件

* mixins 选项合并组件,可以将公共方法放在一起
  * [mixins @Vue](https://cn.vuejs.org/v2/guide/mixins.html)
* data方法只会在组件初始化时候运行一次,更新数据不会重复触发data方法
* [Msgbox的实现 @element](https://github.com/ElemeFE/element/blob/059448bf7dee7200c3413cf9d4546fd442e63de7/packages/message-box/src/main.js#L17)
  
  ```js
  var msgbox = new component(el: document.createElement('div')) ;
  document.body.appendChild(msgbox.$el);
  ```

  * [notification的实现 @element](https://github.com/ElemeFE/element/blob/ec3326e0bc7e30d2da8ecea21732eff09726ed7f/packages/notification/src/main.js)
    * 原理 其它动态组件也可以这么实现

      ```js
      //注册全局方法
      function Notification(){
        //动态示例化组件
        instance = new Component()
        instance.$mount();
        //追加到dom
        document.body.appendChild(instance.$el);
      }
      ```

* 组件之间如何传递dom
  * solt
  * [$createElement](https://www.jianshu.com/p/84cd41a5009c)
    * 相比solt方式，可以以代码的形式传递dom，直接传递文本是存在问题的

## 刷新路由组件的方法

* v-if 方法是刷新
  * `this.load = false;this.$nextTick(() => (this.load = true))`

* url加时间戳，且需要配置router-view的key
* router.go(0) 会导致静态资源被重新请求
  * window.location.reload() 类似
* vm.$router.replace() 调用两次，第一次访问不存在的url，第二次访问当前URL
* 进入一个不存在的页面，router.go(-1)再返回上一页

## vue-router

* [Vue Router @vuejs](https://router.vuejs.org/zh/)
* `Vue.use(VueRouter)`, `script` 标签方式无须手动安装
* 注册

```js
const app = new Vue({
  router : new VueRouter({
    routes: [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]
})
}).$mount('#app')

* `this.$route`

  好处：不需要在每个组件中都导入路由。

* `<router-view></router-view>`
  * 可以指定key，` :key="$route.path"`
  *  `replace` 可以直接替换
* `<router-link to="/foo">Go to Foo</router-link>`

  注意：匹配成功会添加 `class=router-link-active`

* 参数或查询的改变并不会触发进入/离开的路由守卫
* 全局守卫
  * `beforeEach((to, from, next)=>{})`
    * 一定要执行 `next`, 否则钩子就不会被 resolved
    * `next()` 进入下一个钩子，全部钩子执行完后状态变成 `confirmed`
    * `next('/')`
    * `next(false)` 中断当前导航，重置到 `from`
    * `next(error)` 触发 `router.onError()`
  * `beforeResolve`
  * `afterEach((to, from) => {`
* 组件守卫
  * `beforeRouteEnter(to, from, next)` `this`无法获取到组件实例，无法使用 `this`
    * 第一次进入，无法通过this读取组件实例
    * 这导致很多数据获取的代码都不能放在vue实例内部
    * 初始化数据
    * 从其它url进入触发beforeRouteEnter
  * `beforeRouteUpdate(to, from, next)` `/foo/:id` 同一个组件不同的参数会重新渲染
    * 手动改变URL的参数会触发
    * 从其它路由进入不会触发beforeRouteUpdate，而是触发beforeRouteEnter
    * 重复进入要重置数据后再初始化数据(可以代码复用),或者直接更新数据(需要写两套代码)
  * `beforeRouteLeave(to, from, next)` 导航离开时的调用
