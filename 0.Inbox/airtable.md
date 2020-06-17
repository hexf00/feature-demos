- 不能创新不存在的选项
AirtableError {
  error: 'INVALID_MULTIPLE_CHOICE_OPTIONS',
  message: 'Insufficient permissions to create new select option ""导入""',
  statusCode: 422
}
- https://community.airtable.com/t/node-api-multiselect-new-option/22083
    - 只能通过UI创建新的字段和选项
    - 文本也可以和表关联、选项框互相转换
    - Formula公式访问字段访问的是文本字符串
            - 无法实现字符串转数组，无法查找某字符串的出现次数
                - 不过可以使用Count field（汇总字段）去实现该功能
                    - 也可以使用rollup+公式实现Countfield的功能
                    - [A count field lets you count the number of linked records in a record link column.](https://support.airtable.com/hc/en-us/articles/360042807213)
                - [Formulas vs other computed fields](https://support.airtable.com/hc/en-us/articles/202576519)
            - 可以汇总关联字段，先rollup，再去除重复。
    - Formula rollup都支持公式
    - 每个字段类型上面都有帮助