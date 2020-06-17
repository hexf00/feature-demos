# eslint

- `npx eslint --print-config ./eslintrc.js > eslint.json`

  - 使用该命令来检查完整的 eslint 配置

- 保存时候自动格式化代码
  - 分号
  - 缩进等
- eslint 的默认 parser 解析器是 espree,可以通过`--parser`更换
  - ts 使用 typescript-eslint 解析器
  - 其它如 Esprima、Babel-ESLint
- 也可使用命令行 一键修复所有格式

- [vscode eslint 配置项说明](https://github.com/microsoft/vscode-eslint#settings-options)

- [eslint 中文文档](https://cn.eslint.org/)

  - [eslint 规则](https://cn.eslint.org/docs/user-guide/command-line-interface)
    - 官方的规则查询，插件的规则或者自定义规则需要去相应插件中看
    - [eslint Rules](https://eslint.org/docs/rules/)
  - [eslint 配置说明](https://cn.eslint.org/docs/user-guide/configuring)
  - [eslint 命令行接口](https://cn.eslint.org/docs/user-guide/command-line-interface)

- 常见属性说明

  - 配置值
    - "off" 或 0 - 关闭规则
    - "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    - "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  - env 使用预定义的全局变量来定义环境
    - node Node.js 全局变量和 Node.js 作用域
    - browser 浏览器环境中的全局变量
    - 配置后才能使用如 console、window、global 等全局变量
  - parser
    - 可以显示配置，也可以由插件配置
  - extends
    - 可以从插件中导出继承的规范，plugin:xxx
    - 有一些内置属性
    - 可以是本地的路径，可以是绝对路径和相对路径
    - 可以是一个 npm 包，属性值可以省略`eslint-config-`
  - parserOptions
    - 解析器的配置
    - vue-cli 会使用的 parser 是 `./node_modules/vue-eslint-parser/index.js`
      - 使用配置可以看到 `parserOptions.parser` 值为 `./node_modules/@typescript-eslint/parser/dist/parser.js`
    - 不同 parser 的参数也会有所不同
  - plugins
    - 插件是 npm 包,可以省略包名`eslint-plugin-`
    - 包含了检测规范，修复的代码
  - rules

- eslint 需要和编辑器的插件配同使用

- no-undef

  - 定义 .eslintrc.js `globals`
    - 没有类型信息
  - 也可改 rule `"no-undef": 0`
    - 不推荐

- 其它错误

  - .eslintrc `rule` 添加为 `off`

- 常见的插件

  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
    - 依赖 [vue-eslint-parser](https://github.com/mysticatea/vue-eslint-parser/)
      - The ESLint custom parser for `.vue` files.
  - [standard](https://github.com/standard/eslint-plugin-standard)
    - ESlint Rules for the Standard Linter
  - [promise](https://github.com/xjamundx/eslint-plugin-promise)
    - Enforce best practices for JavaScript promises
  - [node](https://github.com/mysticatea/eslint-plugin-node)
    - Additional ESLint's rules for Node.js
  - [import](https://github.com/benmosher/eslint-plugin-import)
    - ESLint plugin with rules that help validate proper imports.
  - [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
    - Monorepo for all the tooling which enables ESLint to support TypeScript

- 其它

  - Prettier
    - [Prettier playground](https://prettier.io/playground) 在线体验
    - 主要是 ESLint 推出 --fix 命令行参数之前使用
    - 如果 ESLint 够用，可以不使用 Prettier
    - 如果需要搭配使用，需要先 Prettier，再 ESLint
      - ESLint 作为最终校验规则
      - 删除冲突的规则
      - VSCODE 中的格式化插件也要使用 ESLint，即 VSC Prettier 插件可以不安装
    - prettier 在格式的校验上功能多余 ESLint
      - 三套方案，按严格程度排序，Airbnb > Google > Standard
    - prettier 配置文件
    - prettier 常用配置
    - 关键 npm 包
      - prettier
        - 格式化核心程序
      - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
        - 禁用 所有和格式化相关的 ESLint 规则
        - 提供关闭和 prettier 冲突的规则，需要配合其它规则一起使用
          - 如 `prettier/@typescript-eslint`
        - 可在这个仓库看到具体排除了哪些规则
        - 主要是为了配合`eslint-plugin-prettier`使用，以 prettier 的格式为准
      - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
        - ESLint 插件
        - 提供 prettier 的规则和格式化代码，依赖(peerDependencies) prettier 核心程序
        - 提供`plugin:prettier/recommended`
        - 如果有问题可以尝试`prettier-eslint`
      - [prettier-eslint](https://github.com/prettier/prettier-eslint)
        - 相当于 eslint 的包装器，优先使用`eslint-plugin-prettier`
        - Code -> prettier -> eslint --fix -> Formatted Code
      - 参考
        - [用 TS + Vue 写了一个在 Chrome 中运行 Prettier 格式化的扩展程序 @u3u](https://juejin.im/post/5b0d03996fb9a009e51bea66#heading-12)
          - [用 ESLint 和 Prettier 写出高质量代码 @egoist](https://egoist.moe/2017/12/11/write-better-code-with-eslint-and-prettier/)
        - [一步一步，统一项目中的编码规范（vue, vscode, vetur, prettier, eslint）](https://juejin.im/post/5cbfde7c5188250a7d6ddcd1)
          - 通过安装`prettier-eslint`npm 包，并将 vetur 的 js 格式化指向`prettier-eslint`，实现 vue 中 js prettier+eslint 格式化
        - [在 Typescript 项目中，如何优雅的使用 ESLint 和 Prettier](https://juejin.im/post/5d1d5fe96fb9a07eaf2bae29)
          - 比较全面的总结

- prettier

  - 如要项目中和 eslint 一起配合使用，则 eslint 需要作为编辑器的格式化工具

    - 此时 prettier 是作为 eslint 的插件服务于 eslint 的
    - 如`prettier/@typescript-eslint` 就是代替 `@vue/typescript/recommended`/`plugin:@typescript-eslint/recommended`

  - 由于 prettier 的设计理念是简洁,配置项太少了，所以在 eslint 够用的情况，最好不要引入 prettier

  - 如果 prettier 单独使用，则 prettier 可以作为编辑器的格式化工具

  - [选项文档](https://prettier.io/docs/en/options.html)
  - [prettier 所使用的解析器](https://prettier.io/docs/en/options.html#parser)
    - 每个语言都有自己的解析器

- 规范 ts 最少 npm 包
  - eslint
  - @typescript-eslint/eslint-plugin
    - 提供`plugin:@typescript-eslint/recommended`
    - ESLint 插件，包含了各类定义好的检测 Typescript 代码的规范
  - @typescript-eslint/parser
    - ESLint 的解析器，用于解析 typescript，从而检查和规范 Typescript 代码
    - 必须指定，否则无法检测 TS 代码
