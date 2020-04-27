# ts

- 2020 tslint 不再维护，由 eslint 统一管理 ,[来源](https://github.com/palantir/tslint/issues/4534)

  - [vscode-eslint](https://github.com/microsoft/vscode-eslint#settings-migration)

- **编译器参考文档**
  - [compiler-options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
  - [编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html)

## 定义全局变量

- 建立一个.d.ts
  - 在 tsconfig 的 file 引入
    - 需要注意的是这个文件必须要有`export {}`
      - [参考](https://blog.csdn.net/n6308/article/details/103236093)

## 屏蔽注释

```js
//单行忽略
// @ts-ignore

//忽略全文
// @ts-nocheck

//取消忽略全文
// @ts-check
```

- TS6133 noUnusedLocals 设置为 false 后 忽略未使用的变量报错

## watch

- `-w` 配合`outDir` 和 `rootDir`使用
- `--watch`

## tsconfig 详解

和大多数程序一样，比如 wget、webpack，tsc 可以以命令行的方式接收参数，也可以从配置文件中读取参数，写在配置文件的参数显然时更加易于管理的，但需要注意可能存在一些参数只能在配置文件中使用。

- target 输入代码的 ES 版本，可选值“es5”
- "strict": true 可以对 `this` 上的数据属性进行更严格的推断

  - 如果不引入则会导致 this 被看作是`any`类型
    - 替代品 `noImplicitThis: true`

- 配置后可以 使用 webpack tree-shake 特性

  - "module"

    - 指 ts 代码输出时候模块语法使用哪一种规范
      - 这个输出是没有 polyfill 实现的，所以还需要对应的类库配合
    - 配置成 es2015 和 esnext 才能使 webpack 的热加载生效
    - 实测发现不管哪个导出格式都没有办法直接在浏览器中以 script 使用
      - 已测试 require.js+amd

  - "moduleResolution": "node"
    - 如果不配置，会提示找不到 node_modules 的类库

- noImplicitAny 有 any 时报错
- lib 添加哪些新语法支持
