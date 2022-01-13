# TS中的2种模块化方式差异
<!-- @Date: 2022年1月13日 -->

```ts
class Z { }
const M = { Z }
namespace N { export const ZZ = Z }

const z1 = new Z()  //Z
const z2 = new M.Z() //Z
const z3 = new N.ZZ() //Z

interface Y1 {
  z: Z //Z
}
interface Y2 {
  z: M.Z //找不到命名空间“M”。ts(2503)
}
interface Y3 {
  z1: N.ZZ //“N.ZZ”表示值，但在此处用作类型。是否指“类型 N.ZZ”?ts(2749)
  z2: typeof N.ZZ //typeof Z
  z3: InstanceType<typeof N.ZZ>; //Z
}
```

结论:

1. 类型定义 不能访问 module，可以使用 namespace 访问
2. 名字空间、类型、值  是三种不同的存在。 


------------


```ts
class Z { }

namespace N {
  export const ZZ = Z
  export type ZZ = Z
}

const z = new N.ZZ() //Z

interface Y {
  z1: N.ZZ //Z
  z2: InstanceType<typeof N.ZZ>; //Z
}
```

总结： namesapce中允许同名的类型和值
