# vue-cli-plugin-electron-builder实践

* [文档](https://nklayman.github.io/vue-cli-plugin-electron-builder/)


它是vue-cli的一个插件，主要用途是把vue-cli的项目使用electron技术栈打包为可以分发的二进制程序。
该插件的底层打包使用的是 `electron-builder`。

* 首先需要安装vue-cli的最新版本
  * `npm install -g @vue/cli`
* 然后要有一个vue项目
  * `vue create xxx`
* 然后在改项目添加该cli插件
  * ``

## vue-cli 插件命令

* `vue-cli-service electron:build`
* `vue-cli-service electron:serve`

## electron-builder

这是一个开箱即用的electron打包方案，同时支持多种配置以实现更多功能。底层是electron-builder。

* win支持的格式种类
  * nsis（安装程序）
  * nsis web（web安装程序）
  * portable（未安装的便携应用程序）
  * AppX（Windows Store）
  * Squirrel.Windows
* [electron.build 命令行参考](https://www.electron.build/cli)
* [electron-builder 文档](https://www.electron.build/configuration/configuration)
