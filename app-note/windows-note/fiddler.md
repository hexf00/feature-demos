# fiddler

fiddler 是一个可以使用 js 和 c#进行拓展的抓包工具

[Fiddler 不显示 RequestMethod，看不到请求类型 get/post 解决方法](https://blog.csdn.net/wanglijia26/article/details/89519542)

- fiddler 可以自定义过滤请求，包括状态码，域名。
- 可以 mock 请求
- 可以拦截请求并添加跨域请求头
- 可以自定义菜单
- 可以修改包并发送
- 导出的格式可以在 vscode 的 rest client 中直接使用
- 可以抓包 https，需要安装证书
- 可以抓包移动端，需要配置局域网代理
- android 7 开始 app 可以选择不信任用户区的证书，导致无法抓包 https，如微信，解决方案是使用 android 6 或者将证书安装到 root 区
  - [Android平台HTTPS抓包解决方案及问题分析](https://blog.csdn.net/weixin_33827590/article/details/91443418)

- postman不能识别相同的两行相同的响应头，会导致出问题，fiddler可以
