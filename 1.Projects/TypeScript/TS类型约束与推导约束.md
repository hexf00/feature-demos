# TS 定义约束 与 推导约束
<!-- @Date: 2022年1月13日 -->

```ts

class A {
  private a = 1;
}

interface IA {
  a: number;
}

const a1: IA = new A(); // 属性“a”在类型“A”中是私有属性，但在类型“IA”中不是。ts(2322)
a1.a;

const a2 = new A();
a2.a; // 属性“a”为私有属性，只能在类“A”中访问。ts(2341)
```

总结：

接口（定义约束）不是约束的唯一手段，private等修饰符也是。
接口（定义约束）是消费者对实现的约束，而不是实现对自身的API标注。

ts的类型推导，让代码本身具有约束。
