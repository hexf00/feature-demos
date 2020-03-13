# webpack

模块依赖管理，模块打包工具（module bundler），管理模块。

* 原因：浏览器中JS最初没有模块机制
  * 导致文件（模块）之间依赖是隐式的，需要靠注释说明依赖关系
  * 额外的http请求

* webpack支持各种模块语法
  * 这种支持就是webpack的工作，而非依赖其它语法编译工具实现，如babel、tsc
  * webpack可以直接解析ES6模块语法 import export语法
    * ES6标准模块特性在2015年定义
  * 也可直接解析 CommonJS require、module.exports语法
    * RequireJS遵守AMD规范，和CommonJS一样也使用reuqire关键字，但是用法不同，但都被webpack支持

      ```js
      require(['mod2'], function(m2){
        alert(m2.a)
      });
      ```

    * 还会处理`import()`函数动态引入
      * 技术实现就时在浏览器head底部插入一个script标签
      * `import()`返回一个Promise，只可以在浏览器中使用
      * 动态import，需要 webpack 版本 > 2.4
        * 之前可以使用`require.ensure()`，由webpack提供,v1即可用
      * 动态import是ES标准提案

    * 动态引入需要和`output.publicPath`搭配使用
    * 参考 [vue项目实现按需加载的3种方式：vue异步组件、es提案的import()、webpack的require.ensure()](https://segmentfault.com/a/1190000011519350)

* webpack解决问题
  * code splitting 代码分割
    * splitChunks 代码分片
    * 提升首屏渲染速度
    * [动态引入](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
  * tree shaking
  * 打包文件
    * 好处：减少http请求/依赖管理

* 全局安装与项目安装的区别
  * 全局安装存在版本差异问题
  * 部分插件依赖项目的内部的webpack
  * 所以，推荐是项目安装
    * `npm install webpack webpack-cli --save-dev`
      * `xxx-cli` 是命令行工具程序，`xxx`是核心程序，但是命令上`xxx`也是指向`xxx-cli`，和vue一样
      * 只有全局安装的程序才能直接使用命令行，否则需要使用`npx`命令
        * `npx webpack -v` `npx webpack-cli -v`
          * 当前版本分别为 4.42.0  3.3.11

* 最简单的用法

  `npx webpack --entry=".\src\demo1\index.js" --output-filename="demo1.js" --mode=development`

  * index.js 通过import 引入了其它的js文件
  * 默认 --entry(入口) 是 `/src/index.js`
  * 默认 --output-path (资源输出目录) 是 `/dist`
    * 在配置中需要使用绝对路径 ``
  * 默认 --output-filename (资源输出文件) 是 `bundle.js`

## 基本概念和术语

* `entry` 概念，配置项目，入口文件
  * 可以传入一个数组，数组是算一个入口，而不是多入口，可以理解为显式（手写配置）的import
  * **定义多入口需要传入对象**,key就是`chunk name`,val可以是字符串和数组。
    * 通过多入口我们可以**把代码分为业务app和库vender**，库代码不需要经常变动。
    * 多页应用场景，公用vender。
    * 需要用到CommonsChunkPlugin（v4废弃）、optimization.splitChunks
  * 也可以传递一个函数，只需要返回正确的格式即可，类似vue的data函数
    * 函数的返回值可以是**Promise**
  * `context: path.join(__dirname,'./src')` 配置项，入口文件路径前缀，类似`--output-path`，默认为webpack执行的目录
  
* Module 概念,配置项
  * entry定义及其引入的文件 是module
  * 在webpack中，**一切文件皆moduel**，包括图片、css
    * 现实情况中，依赖关系应该这样管理，而不是分开管理
  * [Loader](https://webpack.js.org/concepts#loaders) 概念，配置项
    * loader与import语法互相对应，loader管理所有import，包括非js
    * webpack默认只能处理js文件，如果我们希望同时管理其它文件的依赖关系则需要loader
      * `module.rules` 配置项是一个对象数组，定义loader的使用规则
        * 限定文件（正则表达式对文件名判断）使用什么Loader
        * `test: /\.css$/` 则会匹配所有css文件
        * `exclude` 排除文件，优先级高于test、inclulde
        * `include` 只在指定目录内找
        * 都是正则表达式
        * 一起使用，可以实现对某目录的子目录进行排除
        * 关于rules之间的顺序，除了显式的数组配置顺序，还可以通过配置项`enforce`的方式来改变顺序
          * pre 最先
          * post 最后
          * normal 即默认
          * 主要用途是文件大了之后用到的
      * 根据resource加载者和issuer被加载者来进行限制
        * 添加issuer 可以限定被谁加载
        * resource即自身，建议显式标注

    * loader是单独的npm包，不属于webpack核心程序和webpack-cli提供
      * `css-loader`
        * 处理各种css加载语法， @import、url()函数等等
          * 捕捉到的文件会交给webpack处理，如url()可以捕捉到图片，但是需要注册对应的图片处理loader，否则会出错
        * 生成css代码转化为webpack module的 包裹代码
          * 处理css必须要有该loader，`style-loader`直接使用会报错
          * 需要在`style-loader`的后面，可能是因为`style-loader`没有生成module包裹代码
        * 输入可以是js也可以是css
      * `style-loader`
        * 不能单独使用，和 `css-loader`配合使用
        * 需要放在`css-loader`的前面，不能放在后面
        * 该插件主要功能是，生成可以将css代码以style标签的形式插入到页面的**包裹代码**
        * 要求输入是css代码，不能是js代码
      * 总结
        * 生成css转换为style函数的代码
        * 将上述生成module注册和包裹代码
    * loader可以添加参数`{loader:"",options:{}}`
      * loader的option具体需要查阅对应loader的文档
    * loader可以理解为是一个转换函数，有输入和输出，可以实现 代码的ES版本转换，css压缩，图片压缩等等
      * v4以前 输入和输出都是字符串
        * 可以理解为是JS函数代码，即css也会被转化为JS包裹的代码
      * v4以后增加了 AST对象，语法树
    * loader是可以链式调用的，一个loader处理的结果作为另一个loader的参数，如scss转化为css，css再压缩等等，可以灵活定制
      * `use:['loader1','loader2']` 如果只有一个可直接使用字符串
    * loader的工作可以理解为对文件的**预处理**，loader处理完后会继续丢给webpack进行处理

* Chunk 概念
  * Entry和它相关的Module构成一个Chunk（代码块），可以理解为**模块依赖树**。
  * Chunk和Entry一对一，多入口有多个chunk，chunk可以使用唯一标识（chunk name）区分，但入口时默认chunk name为`main`。

* Plugin
  * 只靠loader还不能实现全部任务，plugin是更强大的存在，同时插件可以以工厂模式提供loader
  * plugin参数接收一个插件数组
  * webpack提供很多API钩子，插件可以注入代码

* output 配置项
  * Bundle 概念
    * 默认情况下，Entry和Bundle是一对一情况
  * filename 配置项
    * 可以使用模板变量，`[name]`指`chunk name`
      * css**多入口时候，chunk name是必须使用的**，否则会冲突，混合在一个文件里面
      * hash 本次打包所有资源的hash
      * chunkhash 当前chunk内容hash
      * query 可以自定义
      * 比较好的例子是 `[name]@[chunkhash].js`
        * 生产环境不需要配置`chunkhash`
  * publicPath 指定动态加载资源的位置，如异步模块、css背景图等
    * 不同于`devServer.publicPath`，这个配置可以理解为`rewrite`
    * [参考](https://www.webpackjs.com/configuration/output/#output-publicpath)

## 优化

* webpack认为bundle大于250kb就是大文件
* 业务和库分开打包
* optimization.Splitchunks 代码分片
  * 公共文件拆分
* 首屏加速
  * 动态加载 import()

## 杂项

* mode 是需要强制指定的
  * `--mode=development`

## 重要特性

* 代码压缩
  * UglifyJs webpackv3集成
    * 插件形式
  * terser V4集成
    * 配置形式 optimization.minimize = true
      * 也支持更多配置，实测需要配置plugins里面，配置minimizer数组无效，目录、文件、缓存等等
* sourceMap
  * 好处便于调试
  * 坏处是不能在生产影响安全性、影响打包速度
    * 提升速度可以更换一些精简的插件
  * tsconfig.json中的sourceMap无效
* optimization.Splitchunks
  * 只会将node_modules模块抽离出来，src代码不会抽离，但是也只有一份
  * 开启后，多入口时候，会将公共引入的node_modules整合在一起，不开启则打包在一起
    * 可以作用于import()
      * 可以在注释中添加chunkName
  * 本地的src代码在满足条件后也会被抽离出来
    * js 大于30KB
    * css 大于50kb
  * 需要考虑的情况
    * 文件的大小
    * 请求的次数，次数越多开销越大
    * 并行请求数，小于5
    * 首次加载时的并行请求数，小于3
* mode
  * mode是v4添加的，用于管理不同的模式

## 常用loader

* babel-loader
  * 将ES6+编译为ES5
  * 依赖项
    * @babel/core babel编译器核心模块
    * @babel/preset-env 官方推荐的预置器，我理解为是一个配置工具
  * 配置项
    * cacheDirectory 会判断文件是否更改，避免重复编译，提高编译速度
    * `env.modules:false` 默认是true，会把ES6模块语法转换为CommonJS，这会导致Webpaack的tree-shking特性失效
    * babel-loader也可以从`.babelrc`配置文件中读取配置
  * 需要注意，node_modules
* ts-loader
  * 依赖项 typescript
  * ts的配置不再ts-loader中，需要放在tsconfig.json
  * 详细配置查看ts-loader文档
* html-loader
  * 将html转换为字符串并格式化
  * import + document.write() 即可替代传统模式
* handlebars-loader 模板引擎
  * 也需要调用write或者appendChild
* file-loader
  * 用于打包文件类型的资源，并返回publicPath
* url-loader
  * 和file-loader类似，区别是可以对文件配置一个大小限制，小图片以base64返回
* vue-loader
  * 依赖 vue vue-template-compiler css-loader
* mini-css-extract-plugin
  * extract-text-webpack-plugin的升级版，官方推荐
  * 可以按需加载

## 插件

* 注册环境变量插件,环境变量可以在app程序中访问

    ```js
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    })
    ```

* optimize-css-assets-webpack-plugin
  * g6使用了
  * 写在插件里面

## 废弃插件

* extract-text-webpack-plugin
  * 将css打包为css文件，而非style，有助于客户端缓存
  * 是个插件，非loader，但是.extract方法提供loader包装，相当于loader工厂模式
  * 用于webpack v4前,已废弃
  * 同时还需要在plugins进行插件注册
  * v4 中 mini-css-extract-plugin 代替它
* CommonsChunkPlugin
  * 不能处理异步加载的公共包
  * v4 中 optimization.SplitChunks 代替它

## 开发自定义loader

* loader-utils
  * getOptions(this) 可以获取配置
  * this.cacheable() 启用缓存

## 学习资源

* [demos @ruanyf](https://github.com/ruanyf/webpack-demos)
