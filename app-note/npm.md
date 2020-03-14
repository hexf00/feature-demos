# npm

* [cnpm](https://developer.aliyun.com/mirror/NPM?from=tnpm)

npm需要解决的最大问题是下载npm仓库慢，原因是npm仓库在美国

* 加速方案一，添加cnpm命令行工具
  * `npm install -g cnpm --registry=https://registry.npm.taobao.org`
  * 这是一个npm包
  * 这个方案有一个问题是，cnpm创建的node_modules目录和npm有些差异，没有软链接
    * 在大部分情况是没有问题，有些情况可能会有问题，electron的安装会出问题
* 加速方案二，改变npm的仓库配置
  * `npm config set registry https://registry.npm.taobao.org/`
  * `npm config set disturl https://npm.taobao.org/dist/`

  * `npm config set registry https://registry.npmjs.org/`

* package.lock.json是解决版本号的偏差较大带来的兼容性问题

* 也可以在每次运行时候指定`npm --registry https://registry.npm.taobao.org install`

* 查看npm的全部配置
  
  ```bash
  npm config ls -l
  ```

  * cache `C:\Users\hexf00\AppData\Roaming\npm-cache`
  * disturl 无默认值
  * registry `https://registry.npmjs.org/`
  
## electron下载加速

* download-chromedriver
  * electron-download 基础库
* `url = ELECTRON_MIRROR + ELECTRON_CUSTOM_DIR + '/' + ELECTRON_CUSTOM_FILENAME`
* 设定bash环境变量
  * `ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"`
* [设置npm环境变量进行加速](https://docs.npmjs.com/misc/config#environment-variables)
  * 项目内`.npmrc`
  * `$HOME/.npmrc`
    * `PowerShell` 内可以使用 `echo $HOME`,是用户根目录`C:\Users\hexf00`

* 目录参考 `https://npm.taobao.org/mirrors/electron/[v]8.0.2/electron-v8.0.2-win32-x64.zip`
  * v 不知道要不要
  * 具体路径可以查看 `node_modules\electron-download\lib\index.js`
    * 原镜像是`https://github.com/electron/electron/releases/download/v`
* 改变项目package.json

  ```js
  "config" : {
    "electron_mirror": "https://cdn.npm.taobao.org/dist/electron/",
    "electron_custom_dir": "",
    "electron_custom_filename": ""
  }
  ```
