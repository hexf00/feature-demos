# webpack

模块依赖管理，模块打包工具（module bundler），管理模块。

* 原因：浏览器中JS最初没有模块机制
  * 导致文件（模块）之间依赖是隐式的，需要靠注释说明依赖关系
  * 额外的http请求

* ES6标准模块特性在2015年定义
* webpack可以直接解析import export语法

* webpack解决问题
  * code splitting 代码分割
    * 提升首屏渲染速度
  * tree shaking
  * 打包文件
    * 好处：减少http请求/依赖管理

* 全局安装与项目安装的区别
  * 全局安装存在版本差异问题
  * 部分插件依赖项目的内部的webpack
  * 所以，推荐是项目安装
    * `npm install webpack webpack-cli --save-dev`
      * `xxx-cli` 是命令行工具
      * 只有全局安装的程序才能直接使用命令行，否则需要使用`npx`命令
        * `npx webpack -v` `npx webpack-cli -v`
          * 当前版本分别为 4.42.0  3.3.11

* Entry
* Module
* Chunk
* Loader
  * 导入和转换其它资源文件，css/img
* Plugin
* Output
