# eslint

* 保存时候自动格式化代码
  * 分号
  * 缩进等
* 也可使用命令行 一键修复所有格式

* [vscode eslint 配置项说明](https://github.com/microsoft/vscode-eslint#settings-options)
* [eslint Rules](https://eslint.org/docs/rules/)
* [eslint 中文文档](https://cn.eslint.org/)
* [简单的中文说明](https://www.jb51.net/article/172975.htm)
* [eslint 配置说明](https://cn.eslint.org/docs/user-guide/configuring)

* eslint需要和编辑器的插件配同使用

* no-undef
  * 定义 .eslintrc.js `globals`
    * 没有类型信息
  * 也可改rule `"no-undef": 0`
    * 不推荐
* 其它错误
  * .eslintrc `rule` 添加为 `off`
