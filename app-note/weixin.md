# weixin

- 小程序打包实际上是压缩包，源码可以通过解压获得
- 登录公众号平台可以直接扫码选择，不需要密码登陆

## 微信开发

- 小程序

  - 审核
    - 分为两种情况，一种是对公开的小程序，一种无注册内部使用的小程序
      - 其中内部使用又分为两种，需要账号登录或者不需要账号登录
      - 内部小程序隐私设置为不允许被搜索，减少曝光率
  - 对于无账号需要登录的小程序
    - 通过配置一个 URL 路径以动态进入小程序，将审核人员要用到的参数放在 url 中
      - 这种方式是可行的
    - 在提交审核后设置一个时间可以无登录授权

- webview 与小程序之间的通信

  - url，query，锚链接
    - 应该为安全数据
  - webview 中 iframe 只能是业务域名的 URL
    - ajax 未知
    - 静态资源未知
  - websocket 通信

  - [运营规范 小程序内用户帐号登录规范调整和优化建议官方](https://developers.weixin.qq.com/community/operate/doc/000640bb8441b82900e89f48351401)
    - 有推荐和不合规的登录案例
      - 说明要求授权的理由
      - 授权需要由用户手动触发
      - 不能暗示或者明示用户必须要允许授权
      - 如果用户取消授权需要有单独的页面提示和说明
    - 服务范围特定是指没有对外开放注册，例如教务系统、公司员工考勤系统等特定服务范围。相反地，完全对外开放注册的，且注册后即可通过小程序体验更多线上服务的，属于服务范围开放。

- wx.login()

  - 会导致上一个 session_code 失效，所以应该 wx.checkSession()确认 code 失效后再调用 wx.login
  - code
    - code 用一次就过期
    - session_key 有效期是不固定的，用户使用越多则有效期会自动被更新，前端通过调用 checkSession 可以进行判断
  - 代码

    ```js
    onLoad: function () {
    　　wx.checkSession({
    　　　　success: function(res){
    　　　　　　console.log("处于登录态");
    　　　　},
    　　　　fail: function(res){
    　　　　　　console.log("需要重新登录");
    　　　　　　wx.login({})　　
    　　　　}
    　　})
    }
    ```

- [暂不支持企业微信预览小程序体验版，后续会考虑支持上](https://developers.weixin.qq.com/community/develop/doc/000c480ebcc490f1e168f048f5e400)
- [wx.getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)
- [获取手机号](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)
  - 手机号授权不会被记录，每次调用都需要用户同意和点击按钮
- [开发者后台对用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)
- [UnionID 机制说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html)
- [wx.checkSession](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html)
- [code2Session](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)
- [微信小程序平台常见拒绝情形](https://developers.weixin.qq.com/miniprogram/product/reject.html#_1-%E5%B8%90%E5%8F%B7%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF)
- [授权有效期](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)
  - 获取用户授权
- [wx.getSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)
  - 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
  - `authSetting.scope.userInfo: true`
- [wx.openSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)
  - 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
- 关于 unionid
  - getuserinfo 100%返回，但是数据是加密的，需要使用 session_key+appSecret 在服务端进行解密
    - 按钮 100%返回
    - wx.getUserInfo({withCredentials: true}) 代码需要带参数才返回
    - 主要是为了安全
    - 小程序前端也无法调用 code2session，域名屏蔽
  - code2session 可能会返回 unionid，需要登录到开放平台添加关联小程序（该步骤是需要管理员权限，且手动完成的）
- [微信小程序平台运营规范](https://developers.weixin.qq.com/miniprogram/product/#%E4%B8%80%E3%80%81%E5%8E%9F%E5%88%99%E5%8F%8A%E7%9B%B8%E5%85%B3%E8%AF%B4%E6%98%8E)
  - 包含多种图示案例
- 如果正式版本和体验版本使用不同 api，可能会出现切换时 token 失效的原因，触发流程是先登录小程序体验版，再切换到正式版本会提示接口异常，原因是正式版和体验版使用了相同的缓存。

- webview
  - [postMessage 只会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }，data 是多次 postMessage 的参数组成的数组](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)
    - postMessage 数据需要放在 data key 中 ，否则获取不到
  - 调试在 web-view 点右键

## 框架
