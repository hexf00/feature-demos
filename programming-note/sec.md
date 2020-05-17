# sec
- [ThinkPHP 5.x远程命令执行漏洞分析与复现](https://www.cnblogs.com/backlion/p/10106676.html)
 - 其中数组和字典的构建是通过`[]`

- php如果只是设置目录权限依然可能无效，如 webwww 的上级某个目录可写，则php可以使用include引入，
  - `\_\_include_file`
- eval  assert create_function
  - `file_put_content`+include

- 实用函数 $_server __Dir__ 函数调用
