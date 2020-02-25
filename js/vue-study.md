# vue笔记

## vue-router

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
  * `beforeRouteUpdate(to, from, next)` `/foo/:id` 同一个组件不同的参数会重新渲染
  * `beforeRouteLeave(to, from, next)` 导航离开时的调用