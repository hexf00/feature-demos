# TS中属性与方法的继承
<!-- @Date: 2022年1月13日 -->

```ts
class A {
  attr!: {
    a: string;
  }

  log () {
    console.log('A')
  }
}

class B extends A {
  attr!: {
    // 开启和注释这行试试
    // a: string
    b: string
  }
  log () {
    // 开启和注释这行试试
    // super.log()
    console.log('B')
  }
}

const b = new B()
b.log()
```

结论：
1. 子类的属性定义应该是父类属性定义的超集
2. 触发父级方法需要额外调用