# env

- launch.json
  - `configurations[].env` 对象
  - `configurations[].envFile` 文件路径，格式是 ini
    - 可以使用变量`${workspaceFolder}`
- export/set k=v

  - win 使用 set
  - \*unix 使用 export

## 其他

- js 使用 process.env

  - php 有 getenv putenv

- 可以搭配 Webpack 的 `DefinePlugin`一起使用
