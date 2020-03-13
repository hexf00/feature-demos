# node

* fs提示找不到文件
  * `__dirname + '/avatar/myFile.png'` 路径需要添加`__dirname`
  * [参考 @stackoverflow](https://stackoverflow.com/questions/34811222/writefile-no-such-file-or-directory)

* npm的软链功能，可以使用本地路径
  
  ```js
  npm install <path>
  ```

  注：cnpm不会建立软链
