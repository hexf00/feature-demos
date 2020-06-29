- [使用 frp 进行内网穿透](https://sspai.com/post/52523)
- teamview 5938 端口直联
  - teamview 的效果大大好于 anyview
- 被分享的内网机器使用`.\frpc.exe -c .\frpc.ini`启动

```text
[common]
server_addr = 中继服务器地址或ip，frps
server_port = frps端口，默认7000
token = frps配置的token
[自定义名称，方便记忆]
type = tcp 或者是udp
local_ip = 需要被转发的本地服务器的地址，127.0.0.1
local_port = 本地服务器要转发的端口
remote_port = 中继服务器的开放端口
```

- [用开源免费的内网穿透工具 frp，实现远程桌面和文件传输](https://sspai.com/post/60852)