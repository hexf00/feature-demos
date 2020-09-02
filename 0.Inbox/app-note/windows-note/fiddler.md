# fiddler

fiddler 是一个可以使用 js 和 c#进行拓展的抓包工具

[Fiddler 不显示 RequestMethod，看不到请求类型 get/post 解决方法](https://blog.CSDN.net/wanglijia26/article/details/89519542)

- fiddler 可以自定义过滤请求，包括状态码，域名。
- 可以 mock 请求
- 可以拦截请求并添加跨域请求头
- 可以自定义菜单
- 可以修改包并发送
- 导出的格式可以在 vscode 的 rest client 中直接使用
- 可以抓包 https，需要安装证书
- 可以抓包移动端，需要配置局域网代理
- android 7 开始 app 可以选择不信任用户区的证书，导致无法抓包 https，如微信，解决方案是使用 android 6 或者将证书安装到 root 区

  - [Android 平台 HTTPS 抓包解决方案及问题分析](https://blog.CSDN.net/weixin_33827590/article/details/91443418)

- postman 不能识别相同的两行相同的响应头，会导致出问题，fiddler 可以
- 选择不捕捉 https 则浏览器也不会使用 fiddler 的根证书

## 竞品

- charles 收费
- whistle
  - 安装证书的时候需要手动选择“受信任的根证书颁发机构”，否则证书将不会生效
  - fiddler 与竞品不同的是
    - Fiddler 除了添加了根证书的信任，还会动态地生成 HTTPS 个人证书。whistle 则不会
      - certmgr.msc 中个人 可查看

## 调试器

- vconsole
- eruda 比 vconsole 更强大，功能接近 chrome dev tools


## 改掉坏习惯，不逐字逐句的看报错信息。
```bash

    static function OnBeforeResponse(oSession: Session) {
        if (m_Hide304s && oSession.responseCode == 304) {
            oSession["ui-hide"] = "true";
        }
		if (oSession.oResponse.headers.Exists('Access-Control-Allow-Origin')) {
			oSession.oResponse.headers['Access-Control-Allow-Origin'] = '*';
		} else {
			oSession.oResponse.headers.Add('Access-Control-Allow-Origin', '*');
		}
		
		if (oSession.oResponse.headers.Exists('Access-Control-Allow-Headers')) {
			oSession.oResponse.headers['Access-Control-Allow-Headers'] = 'token';
		} else {
			oSession.oResponse.headers.Add('Access-Control-Allow-Headers', 'token');
		}
    }
```

```text
Access to XMLHttpRequest at 'https://url' from origin 'http://192.168.5.205:8080' has been blocked by CORS policy: Request header field token is not allowed by Access-Control-Allow-Headers in preflight response.
xhr.js:172 POST https://url net::ERR_FAILED
```

