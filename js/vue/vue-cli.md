# vue-cli

* [文档](https://cli.vuejs.org/zh/guide/)
* [vue-cli 环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)
  * 在项目根目录定义不同文件来定义环境变量
* [vue-lint](https://eslint.vuejs.org/rules/) 可能是代码报错的重要原因
  * lint一定要配置编辑器的eslint插件一起使用，否则编写过程中不能发现错误

* vue-cli npm中有两个版本
  * `npm install -g vue-cli` 2.X
  * `npm install -g @vue/cli` 4.X

本文默认是基于 新版本

## 安装

* `vue ui` 启动可视化界面管理项目
  * 创建管理项目
  * vue-cli插件管理，搜索、新增
  * npm命令运行和配置
* @vue/cli-service 安装了一个名为 `vue-cli-service` 的命令
  * vue-cli插件也会注入额外的命令
  * `npx vue-cli-service help [command]` 查看所有注入命令或单个命令
* Babel+Ts+Router+CssPreProcessors+linter/formatter +配置文件
  * **重要** [Class-Style Vue Components](https://cn.vuejs.org/v2/guide/typescript.html) TS类风格式声明组件，由vue官方维护
    * 主要是提供一个`@Component`的装饰器
    * [vue-class-component](https://github.com/vuejs/vue-class-component) 详细文档
  * linter/formatter 往往是一体的，分别是格式检查和格式美化两个功能
* > Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)?
  > It will output ES2015 and delegate the rest to Babel for auto polyfill based on browser targets.
  * 大意是说Babel+TSC一起使用是有必要的

* babel 与 tsc
  * babel和tsc都可以把高级的代码转义为旧的代码
  * tsc不提供polyfill，也没有babel那么强的定制性，可以针对具体的浏览器进行编译
  * babel不支持类型检查
  * 两者可以配合使用，配合使用是最好的方式
  * [为什么 Babel 要支持编译 TypeScript @tank0317](https://juejin.im/post/5e034b9ee51d455820602e6a)
* sass/scss
  * sass是指的编译器
  * scss指语法
  * 对于[sass-loader](https://github.com/webpack-contrib/sass-loader)来说，编译器只是后端
  * sass/scss有多个实现
    * [dart-sass](https://github.com/sass/dart-sass) 即sass，dart语言的标准实现，是主要版本
      * ng使用但是这个版本
    * [node-sass](https://github.com/sass/node-sass) node.js实现

* vue官方推荐在vsc使用vetur插件

## 旧版
