# VSCODE 使用笔记

## 格式化功能

- vsc 提供开箱即用的格式化功能，包括 html,js,json

  - 不包括 css\markdown，可以安装插件，prettier 算是一个方案

- 可以为`vetur`的不同部分指定不同为格式化工具

## lint 功能

- 添加下面代码可以让编辑器再保存时候自动格式化代码和检查。

  45454

  ```json
      "eslint.enable": true, // 是否开启检测
      "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
      },
  ```

  注：旧版本的配置项是`eslint.autoFixOnSave`,已经 不再使用了，

  - [vscode-eslint](https://github.com/microsoft/vscode-eslint#settings-migration)
  - [vscode eslint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 调试功能

- [debugging#\_launch-configurations](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)

## 快捷键

- 快速折叠代码块
  - 折叠/展开当前代码块 `ctrl+shift+[` `ctrl+shift+]`
  - 折叠/展开 整个文件 `ctrl+k ctrl+0` `ctrl+k ctrl+]或j`
  - 折叠/展开 整个文件到具体层 `ctrl+k ctrl+2/3`
- `ctrl+tab`
  - 打开上一个编辑过的文件，是一个编辑历史的堆栈列表

## 插件

- es6-string-html 便于使用古老的方式开发 [template_strings @MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)

## 杂项

- [Key Bindings for Visual Studio Code](https://code.visualstudio.com/docs/getstarted/keybindings)
- [vscode 常用快捷键 @awkflf11](https://www.cnblogs.com/awkflf11/p/9412344.html)
- `ctrl+shift+\` 反斜杠是在括号首尾跳转
- markdown 使用什么样的 文件名更好？

  - 如果都是用 README.md
    - 本地跳转略有不便，安装 ctrl 跳转
  - 定义不同的名称
    - github 的文件夹没有默认内容的展示
  - 需要用到文件名的地方
    - 文件之间的连接
    - ctrl+p 快速搜索文件
    - 打开的文件，顶部标签栏
    - 系统搜索文件 如 everything
    - ctrl 跳转

- 滚动条里的蓝色方块表示修改过的行。
- 滚动条的横线表示光标行，可以有多个。
- 如果光标位于括号处，滚动条里会有 1 个或者 2 个亮色小方块，表示当前代码块
- minimap 和序号区，绿色表示新增行，蓝色表示修改行。
- minimap 只展示上下一部分的代码缩略图。
- `code -d "{file1}" "{file2}"` 可以调用文本差异比较工具，搭配 quicker 使用。
- 避免重复输入 git 登录密码，仓库位置运行`git config --global credential.helper store`后重启 ide

## 其它配置项

- `"files.autoSave": "onFocusChange"` 失去焦点时自动保存
- `"editor.tabSize": 2` tab 长度为 2
- 搭配 fileheader 插件可以自动添加文件修改时间

  首先需要插入一个头，通过命令面板

  ```json
  "fileheader.Author": "hexf00",
  "fileheader.LastModifiedBy": "hexf00",
  ```
