# 软件使用笔记

* [jsdelivr](https://www.jsdelivr.com/) 可以找到umd版本的js
* PC微信撤回会导致已经下载的文件丢失. 2.8.0.121
* 如果忘记bitwarden的主密码，则只能删除账户无法恢复数据。 [I forgot my master password](https://help.bitwarden.com/article/forgot-master-password/)

## 标准

* 国标分类
  * 推荐性标准
  * 强制性标准
  * 过期标准
  * ICS分类

* 国际国外组织
  * ISO
  * IEC
  * 涉及版权保护问题
    * 无在线阅读服务
    * 有正式出版物

* [全国标准信息公共服务平台](http://std.samr.gov.cn/)
  * 无下载和预览
* [国家标准全文公开系统](http://openstd.samr.gov.cn/)
  * 全文阅读，检索，ISO无预览
* [中国电子技术标准化研究院](http://www.cesi.ac.cn/page/second3.jsp?catalog=/005/005-003)
  * 提供一些行业准标准/白皮书文档
* 免费下载
  * [学兔兔](http://www.bzfxw.com/) 免费每天下载2个
  * [标准免费下载网](http://www.bzmfxz.com/)

## 快速启动一个本地服务器

* `python -m http.server 8000`
  * http会有缓存，不适合静态文件的开发
* `php -S 0.0.0.0:8000`

## git

* `git remote add [shortname] [url]` 添加远程仓库
* `git fetch [remote shortname]` 拉取指定远程仓库
* 在vsc中进行合并
* 查看github仓库大小
  * `https://api.github.com/repos/{owner}/{repo}`
    * size 单位为kb
  * [chrome插件 github-repo-size](https://github.com/harshjv/github-repo-size)

* [commit如何写参考](https://open.leancloud.cn/git-commit-message/)

  ```text
  类型(可选的范畴): 简短描述

  可选的详情

  可选的注解
  ```

  * 类型 `feat/fix/chore/test/refactor/style/cosm/docs/build: xxx`
  * perf属于feat
  * 文字内容对外部用户的内容是feat，对开发团队的是docs
    * 破坏兼容性的改动需要添加`!`，详情需要 `BREAKING:` 开头说明改动具体影响和原因
    * 如果使用了范畴，需要在文档中解释
  * 每行不超过72字母
  * 注解是与自动化工具集成的信息，如关闭issue
  * 动词使用一般现在时
