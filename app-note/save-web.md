# 保存网站的方法

## har

* 格式
  * log
    * version har格式版本，字符串
    * creator
      * name 浏览器，字符串
      * version 浏览器版本，字符串
    * pages 页面请求，数组
      * startedDateTime 请求开始时间，UTC格式
      * id 标识符，对应`entries[].pageref`字段
      * title 页面URL
      * pageTimings
        * onContentLoad 请求开始到onContentLoad的时间，毫秒
        * onLoad 请求开始到onLoad的时间，毫秒
    * entries 请求，数组
      * startedDateTime 请求开始时间，UTC格式
      * time 响应完成用时，毫秒
      * request 请求头+请求体
        * method 请求方法
        * url **完整url地址**
        * httpVersion http版本
        * headers
        * queryString
        * cookies
        * headersSize
        * bodySize
      * response 响应头+响应体
        * status
        * statusText
        * httpVersion
        * headers
        * cookies
        * content 响应体
          * size 响应体长度
          * mimeType 响应体mineTYpe
          * text 响应体内容，可能没有该键名
            * "video/mp4" 类型没有
            * 存在特殊情况，如统计平台的URL，text为空字符串
          * encoding text采用的编码，base64
            * "image/png" 有
        * redirectURL
        * headersSize
        * bodySize
        * _transferSize
      * cache ?
      * timings 各关键时间点
      * serverIPAddress 服务器IP地址
      * _initiator ?
      * _priority ?
      * _resourceType 资源类型，字符串
        * `"document"`
      * connection ?
      * pageref 所属页面，与`pages[].id`对应

## wget

* [man wget @GNU](http://www.gnu.org/software/wget/manual/wget.html)
* [windows 释出版本](https://eternallybored.org/misc/wget/)
* wget 提供5种过滤机制
  * [域名](http://www.gnu.org/software/wget/manual/wget.html#Spanning-Hosts)
  * [文件类型](http://www.gnu.org/software/wget/manual/wget.html#Types-of-Files)
  * [目录](http://www.gnu.org/software/wget/manual/wget.html#Directory_002dBased-Limits)
  * [相对路径](http://www.gnu.org/software/wget/manual/wget.html#Relative-Links)
    * `-L` `--relative`
    * 只允许相对路径，开启则不会跨域，一旦设置`/`开头的地址也不会下载
    * 因为没啥用，可能会被删除
  * [ftp链接](http://www.gnu.org/software/wget/manual/wget.html#FTP-Links)
  * 标签过滤
    * `--follow-tags=list` 标签白名单
    * `--ignore-tags=list` 标签黑名单
* 参数
  * `-k` `--convert-links`
    * 文件下载后，wget修改该文件对应的URL的链接，使其指向对应的本地文件。
    * 可以实现本地访问
    * 未下载的文件url不会改变
  * `-p` `--page-requisites`
    * **下载单页或单个文件**
    * 下载需要的资源文件，如link、script、img、audio、video等标签的 (`href`/`src`)属性 ，还包括css种`url()`
      * 1.12版本以前并不会下载`url()` [参考](https://superuser.com/questions/55040/save-a-single-web-page-with-background-images-with-wget)
    * 不会下载`a`标签的内容
    * 默认不会下载其它的host的文库，需要使用`-H`开启跨域下载不同域名的资源文件
  * `-E` `--adjust-extension` `--html-extension`
    * 根据mine规范后缀名
    * 如`xxx.asp`的mine是`text/html`，则保存为html后缀，类似还有css、gz等
  * `-H` `--span-hosts`
    * 允许跨域，wget默认只访问同域名的url
    * 如果一个页面的资源文件和html放在不同的服务器，则需要启用这个选项
    * 附加参数
      * `-Ddomain1.com,domain2.com` 域名白名单
      * `--exclude-domains a.domain1.com,b.domain2.com` 域名黑名单
  * `-K` `--backup-converted`
    * 转换文件名的时候使用`.orig`备份原文件
  * `-nH` `--no-host-directories`
    * 保存时候不要建立域名文件夹，默认会根据域名建立文件夹
  * `-R` `--reject`
    * 文件类型黑名单
  * `--no-check-certificate` 不检查https
  * `-U` `--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"` 伪造user-agent
  * `-w seconds` `--wait=seconds`
    * 指定两次请求之间时间间隔
    * **如果长时间下载某个站点需要设置这个值，否则可能影响服务器正常工作**
  * `-np` `--no-parent`
    * 递归检索的时候不要检索父级目录
    * 保证不会从其他目录下载内容
  * `-c` `--continue`
    * 断点下载，以文件大小判断
  * `-r` `--recursive`
    * 递归检索，广度优先，默认深度为5
    * `-l 1` 保证递归深度不会超过1个
  * `-nd` `--no-directories`
    * 保存时候不创建目录结构
  * `-l depth` `--level=depth`
    * 递归检索的深度，默认为5
  * `--cut-dirs=number`
    * 保存时候忽略几层目录，从根部开始忽略
  * `--limit-rate=amount`
    * 限制速度，如20k、1m
* 疑难杂症
  * `failed: Permission denied.` 可能是本地没有网络，被防火墙拦截。
  * 1.12版本以前并不会下载css中的引用文件 `url()`
  * html中script中的html标签拼接中有a标签等会导致链接被转换
  * 缺少：html中的style标签中的`url()`不会被下载和转换，但css文件中的`url()`会被转换
  * 缺少：JS中动态加载的css文件不会被下载
  * 有些双斜杠`--`命令后面有等号，有些没有
* 参考
  * [批处理手动实现下载css中的图片并重命名](https://www.wanweiwang.cn/FAQ/view/969.html)
* 实际使用
  * 下载单页html，或者下载css及资源文件，支持跨域，不能下载js动态导入的文件

    ```bash
    wget
    --no-check-certificate
    --user-agent="Mozilla / 5.0(X11; Fedora; Linux x86_64; rv：52.0)Gecko / 20100101 Firefox / 52.0"
    --convert-links
    --page-requisites
    --span-hosts
    --no-host-directories
    --reject mp4
    "url"
    ```

    简写版

    ```bash
    wget -k -p -H -nH -R mp4 "url"
    ```

## 疑难杂症

* js中动态导入css文件
* js中动态导入js文件
* 根据ajax请求判断用户的登录状态来切换UI显示

## 调试工具

* winpcap+smartsniff
