# vue-cli-plugin-electron-builder实践

* [文档](https://nklayman.github.io/vue-cli-plugin-electron-builder/)

它是vue-cli的一个插件，主要用途是把vue-cli的项目使用electron技术栈打包为可以分发的二进制程序。
该插件的底层打包使用的是 `electron-builder`。

* 首先需要安装vue-cli的最新版本
  * `npm install -g @vue/cli`
* 然后要有一个vue项目
  * `vue create xxx`
* 然后在改项目添加该cli插件
  * `vue add electron-builder`
* 传递给CLI的参数electron:build都将转发给electronic-builder。
  * 可以直接用配置文件去定义

* [squirrel-windows的相关说明](https://www.electron.build/configuration/squirrel-windows)
  > Squirrel.Windows target is maintained, but deprecated. Please use nsis instead.
  > To use Squirrel.Windows please install electron-builder-squirrel-windows dependency. To build for Squirrel.Windows on macOS, > please install mono (brew install mono).
  * electron-Builder团队已弃用Squirrel.Windows，建议改用nsis
  * 依赖项为 `electron-builder-squirrel-windows`

* `vue invoke electron-builder` 有时候改变了环境需要执行这个更新配置
* 该插件可以给electron自动安装vue调试工具
  
  ```text
  D:\code\electron-demo\node_modules\vue-cli-plugin-electron-builder\lib\installVueDevtools\index.js
  ```

* [工作原理](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/guide.html#build-command)

## vue-cli 插件命令

* `vue-cli-service electron:build`
* `vue-cli-service electron:serve`

* [electron.build 命令行参考](https://www.electron.build/cli)
* [electron-builder 配置项文档](https://www.electron.build/configuration/configuration)

## 其它

* 安装的过程遇到了一个错误

  ```text
  • cannot move downloaded into final location (another process downloaded faster?)  
      path=C:\Users\hexf00\AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.5.0
      tempFile=C:\Users\hexf00\AppData\Local\electron-builder\Cache\winCodeSign\542088975
      error=rename C:\Users\hexf00\AppData\Local\electron-builder\Cache\winCodeSign\542088975 C:\Users\hexf00\AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.5.0: Access is denied.
  ```

  使用管理员权限运行后也没有OK，手动重命名后成功，一起有3个文件  
  * nsis/nsis-3.0.3.2
  * nsis/nsis-resources-3.4.1
  * winCodeSign/winCodeSign-2.5.0

* ts报错
  * 如 找不到webpack-env的类型定义
  * 重启vscode 恢复
    * 推测可能是我手动删除node_modules，vscode使用的是缓存信息
    * 牢记重启大法好
