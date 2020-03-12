# electronjs

* 优势： web技术/开源/跨平台/生态成熟
  * 兼容 Mac、Windows 和 Linux，不含移动端
  * PhoneGap提供桌面打包，基于electron

* [官网](https://www.electronjs.org/)
  * 官网文档来源于github
* [术语表](https://www.electronjs.org/docs/glossary)
* [文档目录](https://www.electronjs.org/docs)

* 构成
  * Node
  * Chromium

* 版本，各个版本差一个大版本号
  * latest
  * beta
  * nightly

* 特性
  * [自动更新+安装程序+自安装](https://www.electronjs.org/docs/api/auto-updater)
    * macOS 和 Window 支持该功能
      * mac 必须配置自动更新，因为mac种autoUpdater基于Squirrel.Mac，Squirrel.Mac要求必须配置自动更新
      * win需要使用安装程序安装才能使用autoUpdater
        * electron-winstaller
          * 确保不要在第一次运行时更新你的应用程序
        * electron-forge
          * 底层使用了Electron Packager
          * 确保不要在第一次运行时更新你的应用程序
        * grunt-electron-installer
        * electron-squirrel-startup
          * 创建应用程序的桌面快捷方式
  * [菜单](https://www.electronjs.org/docs/api/menu)
    * win和mac菜单有不同
  * [崩溃日志](https://www.electronjs.org/docs/api/crash-reporter)
    * 错误日志需要专门部署服务器或使用PaaS接收
      * [mozilla/socorro](https://github.com/mozilla/socorro) python，mozilla推荐考虑其它方案
      * [electron/mini-breakpad-server](https://github.com/electron/mini-breakpad-server) node
  * [content-tracing](https://www.electronjs.org/docs/api/content-tracing) 性能分析，导出文件
    * 分析工具 `chrome://tracing`
    * ready时间触发以前不应该使用

* demos&source
  * [electron-quick-start](https://github.com/electron/electron-quick-start) 示例项目
  * [API示例 demo](https://github.com/electron/electron-api-demos)
  * [Electron Fiddle](https://www.electronjs.org/fiddle) 类似一个小程序IDE，快速开发demo应用，集成了VCS的编辑器Monaco，根据Electron版本自动切换语法提示
  * [pomotroid](https://github.com/Splode/pomotroid.git) 番茄钟
  * `C:\Users\hexf00\AppData\Roaming\Electron Fiddle\electron-bin\8.0.2` 存放目录
  * 可以使用`electron-forge` 导出安装应用
    * `electron-forge make`

* 类库
  * [Squirrel.Windows](https://github.com/Squirrel/Squirrel.Windows) 像Chrome那样点击一次就工作
    * 自动化打包
    * 增量更新包
    * 后台更新，不中断用户，无需重启
    * [完整](https://github.com/Squirrel/Squirrel.Windows/blob/develop/docs/goals.md)

## 概念及其关系梳理

* [electron-vue 文档](https://simulatedgreg.gitbooks.io/electron-vue) 这是一个许久没有更新的vue+electron方案
  * vue-cli还停留在2版本
  * 实现方式是把electron以vue插件的形式注册，让组件可以方便的调用
  * 底层打包使用的是`electron-packager`和`electron-builder`
    * 都是@electron-userland社区提供支持
    * `electron-packager`创建简单的可执行文件
    * `electron-builder`提供完整的安装程序、自动更新的支持

## 进程间通讯/页面如何共享数据

* 运行 package.json 的 main 脚本的进程被称为 the **main process** (主进程)。
  * 我推测这可能是一个 Node.js 进程
* web 页面运行在它自己的the **renderer process**（渲染进程）。
  * 我推测这是 Chromium 的进程，Chromium 是多进程架构，一个页面即一个进程。
    * 但是默认情况下该允许环境也提供了Node的API
      * 可以在实例化时候通过参数关闭，可以解决变量名和环境冲突的问题

        ```js
        webPreferences: {
          nodeIntegration: false
        }
        ```

  * 主进程中`new BrowserWindow()`创建页面
    * `win.loadURL('app://./index.html')`
    * 在app的ready和activate（mac）中调用
  * 渲染进程只关心自己所允许的web页面
  * 渲染进程中不可以调用与native GUI related APIs（与原生GUI相关的API）
    * 如需操作可以通过与主进程进行communicate（通讯），由主进程操作
* 关于API
  * 主进程、渲染进程可以使用所有的Node.js的接口
  * 通过查阅文档确定一个API能否在 主进程 和 渲染进程 中运行
    * `BrowserWindow` 只能在主进程中使用
    * `remote` 两个进程都可以用
  * API引入都是通过 `require('electron')`
* 进程之间的通讯方式
  * ipc-renderer \ ipc-main
  * remote
    * `remote.getGlobal('sharedObject')` 读取主进程中的`global`属性
    * 渲染进程中使用remote有严重的安全隐患，如果执行了网络或其他可能不安全的js，则可以拿到remote对象进行操作 [参考](https://www.electronjs.org/docs/tutorial/security#15-disable-the-remote-module)
* 网页之间的通信
  * Storage API
    * localStorage
    * sessionStorage
  * [IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API)
    * 事务型数据库，并非基于固定列表，基于JavaScript的面向对象
    * 存储大量结构化数据(包括, 文件/ blobs)
    * 可以在 Web Worker 中使用
* [Electron 应用架构](https://www.electronjs.org/docs/tutorial/application-architecture)

## 安全

* 一旦有恶意JS执行，危险性非常严重
* [官方对安全性的建议](https://www.electronjs.org/docs/tutorial/security)
  * 限制域名
  * 关闭新窗口权限，新窗口可能具有默认权限
  * 限制remote模块的使用 防止原型污染攻击
  * 远程内容上下文隔离

