# events

## event loop

- task queue 是一个 set 而非 queue
  - task 指宏任务，具体任务可以是：Events、Parsing、Callbacks
  - 只有宏任务是异步的
- mircotask queue，是微任务队列
  - 微任务是阻塞主线程的
  - 在 ECMAScript 中 Promise.then 注册的不叫 microtask 而是称为 job
- [HTML Standard 系列：浏览器是如何解析页面和脚本的 @Minute](https://juejin.im/post/5dc8ca0a6fb9a04a7e1a44ff)
- [HTML Standard 系列：Event loop、requestIdleCallback 和 requestAnimationFrame @Minute](https://juejin.im/post/5ddf935951882530bd52bc8d)

## annimation

- requestAnimationFrame 比 setimeout 拥有更加平滑的帧数

  - settimeout 实际时间只多不少
  - requestAnimationFrame 最小化时不进行计算
  - 某些情况如 resize、scroll 下可以直接使用 requestAnimationFrame 替代 Throttle 函数

- [你知道的 requestAnimationFrame【从 0 到 0.1】](https://juejin.im/post/5c3ca3d76fb9a049a979f429#heading-6)
- [setTimeout 和 requestAnimationFrame @木子星兮](https://juejin.im/post/5e621f5fe51d452700567c32)
