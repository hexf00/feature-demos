# vue笔记

* [$createElement()](https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0) 用来创建Dom,可以被更方便的JSX代替

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
