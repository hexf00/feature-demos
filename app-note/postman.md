# postman

- 可以多人，分享 api
- 可以从 swagger 导入 API
- [支持变量](https://learning.postman.com/docs/postman/variables-and-environments/variables/)

  - 变量可以在域名使用
  - 可以在参数使用
  - 适用于全局管理 token
  - 可以创建 mode

- postman 提供 console，可以在菜单和左下角状态栏图标找到
- [支持请求前后脚本](https://learning.postman.com/docs/postman/scripts/pre-request-scripts/)
  - Test 内脚本表示结束后执行
- 支持全局变量

```js
pm.response.to.have.status(200);
pm.response.json();
pm.expect(jsonData.value).to.eql(100);
pm.response.to.have.body("response_body_string");
pm.collectionVariables.set(
  "ActivityProductList",
  JSON.stringify(jsonData.Data.ItemList)
);
pm.test("Status code is 200", function () {
  //somecode
});
```
