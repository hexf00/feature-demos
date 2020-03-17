# chrome 拓展开发

## 架构

- 3 个网页进程，3 个不同的作用域
  - background
    - manifest.json 中的 background.page 项 和 background.scripts 项 是二选一的关系
  - popup
  - options

## 调试

- `chrome://extensions/`

  - `查看视图 背景页/background.html` 可以看到 backgound 的控制台输出
    - 直接刷新该控制台即等于重新载入控件
      - 代码的方式重载 `chrome.runtime.reload()`
    - 该控制台可以使用 chrome 变量
    - [Where to read console messages from background.js in a Chrome extension? @stackoverflow](https://stackoverflow.com/questions/10257301/where-to-read-console-messages-from-background-js-in-a-chrome-extension)

- popup 的控制通过右键小图标打开
  - 刷新 popup 的控制台，不会导致 background 重启，即 background 还是使用旧代码
    - 这会导致 popup 通过`chrome.extension.getBackgroundPage()`获取到的 window 是一个旧的对象，所以更新了代码应该刷新

## 通信

- options，popup 中使用`chrome.extension.getBackgroundPage()`
  - backgroud 中没有获取 options、popup 的方法

## 后续

- 解决修改代码需要手动刷新拓展
  - 热重载原理 `chrome.runtime.reload()`

## api

- 获取窗口
  - `chrome.windows.getAll(opts, cb)`
    - `populate: true` 则会返回 tabs 数据，默认不返回
- 获取 tab
  - `chrome.tabs.query(opts, cb)`
    - `currentWindow: true` 当前窗口，默认全部窗口
    - `active: true` 激活 tab，默认全部 tab
