# windows 使用笔记

## 画图 3d 使用笔记

- 一种可行的实践：仅使用画图 3d 的 3D 功能，文字和标注可以在选定合适的视角后截图，再单独使用 2d 画图工具标注截图
- 2D 图形、文本仅在创建时可以编辑，确认后不可再调整
- 文本不可做贴图使用，需要文本贴图可以在贴图功能处添加文字图片
- 2D 图形转换为 3d 图形是一张卡片，没有厚度
- 画图 3D 不提供完整的保存功能，保存为`3mf`或者`glb`后缀格式的文件再次代开会导致一些数据丢失，重装系统需要自己做好工程文件的备份(待测试)
- 画图 3D 工程文件目录 `C:\Users\用户\AppData\Local\Packages\Microsoft.MSPaint_8wekyb3d8bbwe\LocalState\Projects`

- 使用 chocolatey 安装和管理 win 的软件

## 抓包工具

- fiddler

[Fiddler不显示RequestMethod，看不到请求类型get/post解决方法](https://blog.csdn.net/wanglijia26/article/details/89519542)

- fiddler可以自定义过滤请求，包括状态码，域名。
- 可以mock请求
- 可以拦截请求并添加跨域请求头
- 可以自定义菜单
- 可以修改包并发送
- 导出的格式可以在vscode的rest client中直接使用
