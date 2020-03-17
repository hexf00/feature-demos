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

## tsconfig 详解

和大多数程序一样，比如 wget、webpack，tsc 可以以命令行的方式接收参数，也可以从配置文件中读取参数，写在配置文件的参数显然时更加易于管理的，但需要注意可能存在一些参数只能在配置文件中使用。

- target 输入代码的 ES 版本，可选值“es5”
- "strict": true 可以对 `this` 上的数据属性进行更严格的推断

  - 如果不引入则会导致 this 被看作是`any`类型
    - 替代品 `noImplicitThis: true`

- 配置后可以 使用 webpack tree-shake 特性
  - "module": "es2015"
    - 配置成 commonjs，热加载会失效
  - "moduleResolution": "node"
    - 如果不配置，会提示找不到 node_modules 的类库
- noImplicitAny 有 any 时报错
- lib 添加哪些新语法支持
