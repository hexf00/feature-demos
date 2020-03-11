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
  * `C:\Users\hexf00\AppData\Roaming\Electron Fiddle\electron-bin\8.0.2` 存放目录
  * 可以使用`electron-forge` 导出安装应用
    * `electron-forge make`

* 类库
  * [Squirrel.Windows](https://github.com/Squirrel/Squirrel.Windows) 像Chrome那样点击一次就工作
    * 自动化打包
    * 增量更新包
    * 后台更新，不中断用户，无需重启
    * [完整](https://github.com/Squirrel/Squirrel.Windows/blob/develop/docs/goals.md)
