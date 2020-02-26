# 保存网站的方法

* har
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
* wget