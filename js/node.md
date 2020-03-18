# node

- 流按行读取的方法

  - `Transform`
    - [通过 Node.js Stream API 实现逐行读取的实例](https://blog.csdn.net/hsl0530hsl/article/details/87865310)
  - `readline`
    - [Nodejs--readline（逐行读取）](https://blog.csdn.net/weixin_34050389/article/details/92387269)

- fs 提示找不到文件

  - `__dirname + '/avatar/myFile.png'` 路径需要添加`__dirname`
  - [参考 @stackoverflow](https://stackoverflow.com/questions/34811222/writefile-no-such-file-or-directory)

- npm 的软链功能，可以使用本地路径

  ```js
  npm install <path>
  ```

  注：cnpm 不会建立软链
