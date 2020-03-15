# VSCODE 使用笔记

## lint功能

* 添加下面代码可以让编辑器再保存时候自动格式化代码和检查。

  ```json
      "eslint.enable": true, // 是否开启检测
      "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
      },
  ```

  注：旧版本的配置项是`eslint.autoFixOnSave`,已经 不再使用了，

  * [vscode-eslint](https://github.com/microsoft/vscode-eslint#settings-migration)
  * [vscode eslint插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 调试功能

* [debugging#_launch-configurations](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)

## 快捷键

* 快速折叠代码块
  * 折叠/展开当前代码块 `ctrl+shift+[` `ctrl+shift+]`
  * 折叠/展开 整个文件 `ctrl+k ctrl+0` `ctrl+k ctrl+]或j`
  * 折叠/展开 整个文件到具体层  `ctrl+k ctrl+2/3`
* `ctrl+tab`
  * 打开上一个编辑过的文件，是一个编辑历史的堆栈列表

## 插件

* es6-string-html 便于使用古老的方式开发 [template_strings @MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)

## 杂项

* [Key Bindings for Visual Studio Code](https://code.visualstudio.com/docs/getstarted/keybindings)
* [vscode常用快捷键 @awkflf11](https://www.cnblogs.com/awkflf11/p/9412344.html)
* `ctrl+shift+\`   反斜杠是在括号首尾跳转
* markdown 使用什么样的 文件名更好？
  * 如果都是用README.md
    * 本地跳转略有不便，安装ctrl跳转
  * 定义不同的名称
    * github的文件夹没有默认内容的展示
  * 需要用到文件名的地方
    * 文件之间的连接
    * ctrl+p 快速搜索文件
    * 打开的文件，顶部标签栏
    * 系统搜索文件 如everything
    * ctrl跳转

* 滚动条里的蓝色方块表示修改过的行。
* 滚动条的横线表示光标行，可以有多个。
* 如果光标位于括号处，滚动条里会有1个或者2个亮色小方块，表示当前代码块
* minimap和序号区，绿色表示新增行，蓝色表示修改行。
* minimap只展示上下一部分的代码缩略图。
* `code -d "{file1}" "{file2}"` 可以调用文本差异比较工具，搭配quicker使用。
* 避免重复输入git登录密码，仓库位置运行`git config --global credential.helper store`后重启ide