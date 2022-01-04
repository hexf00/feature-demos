# Extends 和 Infer

- [演示](https://www.typescriptlang.org/play?ts=4.5.4#code/MYewdgzgLgBA7iATgEwjAvDA2gKBjAbxjAEMBbAUwC4YByE2gGhmQomBoCIAzAS0WjwkyTjAC+jPIWLlqdAEZMWbDjE4QKoMMiEpRYnAF0YJNFug4cAeiswAijBrXbUAJ4AHCjAAqAEV7AsJgEzvhhJFx8ArAIegDcoWEw8lwaWjqxIgk24pZunjAA6sJomPkUINy6qFhgAK5k8hSIhpY5AIIAjI6hgAvxgBSuMIDePoDR6oBwcoBuioAK2oClxoDHyqMwFAAeUBTaaIDOioDfPjjlMABivNoAQq4AcrIAPACqYLzgzJeUAHwYMHcPYEur66jSpEoNGeXjEMAA-B97uBHMQKAA3ZoJfZ+AJBQhSLAAaworhgxyKJSwtEBFFohkMNCOpwu12KKAgzBxrhexNY7HJOAMoXaACYejkBjBAL+KgAdTMaAFQDABAqo0AQ8qisWAELcfmsNjAdjAANT4sDcZqhcAAGzxsSxOpgUDQV0wABYAHSdO0AVj2Hi8qMC-OCmOZ5vpNRJsnJlJgAApQyREABzGj+iAASgwb3hIF4yETK1V-3DkZjANkNGZzBIUbkxz1iA+4kT6GTqfTEKrNDACP13Jymb+aBW5Hchq8nTybsOYG87wj0ZoUEQdQoNbraddBQOYBO49zNHkIBA-ZIYHnMBTi6X7oA+muyjOvJ21VudxQ943p7PYdwSIaNDAbM+KCeYCdTzHTA713b4b3+H8nyvV930-Gw3w-X8-xXbxTxXC8RzHcC0HQqCXxoBC4KsQjf32dC0NHd5cOwzC8K8AjYK8b8r0sUIaJ7Mg+y8XkhwKdp3iIUkuBIThmHZVQeH4QRMn0P8MMEgs1HkUTlHYVJNHADJhFk-Z2gw-iAB9-14rwV34zAJzzdoDyPZBkLAPT10nGA9Js+s2lsUZJRlEZlRonY-3aU9HMwfiaMcyFIIYxCvxcFjdIA8yXLXcK6JgmKchIjzhnGaZ5kWfzdl008SHeMLfjVBSgTUETxDS6KiJ-QKSvkMqVS7fNqs4WqjM4ZS6si6CGqYqwmoSkqypSir-iquRuv0eqYBI2KsvGkhWtCqaszQWbhNEXr+rBQb8KWxjYqa0IxW8uUFVFPzpq2bZABh-sZRkAD7dAFnleygrMjCzPatVfsW5b4MY76AP+zAgZo-7jvo06MtGljnHLZonsACuNAB-tUYnqGQAeeUAbZsRma1HEAm0KAZmmQupEsSVBoUmqyOpsEaIyTomqTgSd1ZoWramjdpq-alJU8SGZ5ysbgGlmQasdnpO0wKANJ8nkspnbqbm2nVNURmpeZqXhpWsHxpV9bJvVzqteFvrRfpnUKyZxtDdZkb5ZibSYF6tJNM5kyRyCs2qIcy2c2cwX5rptSHeaJm3LTRNIRd2X3b9siHNPM2NoD0PLJoCOepFqPdYluOk0PetE5ls7QcQ8HM4l1XoYesM86tvbi-Fx39fjhsk-SoiYBeW07V5O0AGY4URStmGtGB7UdJ01CiBW9Bgeus+DxyaLDvMC5t5TO5jyXq3L2yq+TmurBbaecCAA)

```typescript
const words = [
  { name: 'a', desc: "first word" },
  { name: 'b', desc: "second word" }
] as const

// Q : 
// type TDict = {
//     a: "first word";
//     b: "second word";
// }

type Words = typeof words[number]

// A1 :
// 运用 类型与其子接口类型 extends 关系
type FindByName<Union, Name> = Union extends { name: Name } ? Union : never;
type TDict = {
  [key in Words['name']]: FindByName<Words, key>['desc']
}

// A2 :
// 运用 函数与联合类型参数函数的 extends 关系 + infer
// only work in ts <= 4.1.5
type TDict2 = {
  [key in Words['name']]: ((arg: Words) => void) extends ((arg: { name: key, age: infer U }) => void) ? U : never
}

// extends example 1

type FnT = (arg: true) => void
type FnB = (arg: boolean) => void

type T_B = true extends boolean ? true : false //true
type B_T = boolean extends true ? true : false //false

type FnT_FnB = FnT extends FnB ? true : false //false
type FnB_FnT = FnB extends FnT ? true : false //true


// extends example 2

type A = { name: "a", desc: "first word" }
type B = { name: "b", desc: "second word" }
type AB = A | B

type FnA = (arg: A) => void
type FnAB = (arg: AB) => void

// 类型与联合类型的 extends 关系
type A_AB = A extends AB ? true : false // true
type AB_A = AB extends A ? true : false // false

// 类型与其子接口类型 extends 关系
type A_a = A extends { name: "a" } ? true : false //true
type A_ab = A extends { name: "a" | "b" } ? true : false //true
type AB_a = AB extends { name: "a" } ? true : false //false
type AB_ab = AB extends { name: "a" | "b" } ? true : false //true

// 函数与联合类型参数函数的 extends 关系，与类型相反
type FnA_FnAB = FnA extends FnAB ? true : false //false
type FnAB_FnA = FnAB extends FnA ? true : false //true

//infer，推导类型，类似泛型
type A_infer_a = A extends { name: "a", desc: infer U } ? U : false //"first word"
type A_infer_ab = A extends { name: "a" | "b", desc: infer U } ? U : false //"first word"
type AB_infer_a = AB extends { name: "a", desc: infer U } ? U : false //false
type AB_infer_ab = AB extends { name: "a" | "b", desc: infer U } ? U : false //"first word" | "second word"

type FnA_infer_a = FnA extends ((arg: { name: "a", desc: infer U }) => void) ? U : false //"first word"
type FnA_infer_ab = FnA extends ((arg: { name: "a" | "b", desc: infer U }) => void) ? U : false //false
type FnAB_infer_a = FnAB extends ((arg: { name: "a", desc: infer U }) => void) ? U : false // >= 4.2.3 never , <= 4.1.5 "first word" 
type FnAB_infer_ab = FnAB extends ((arg: { name: "a" | "b", desc: infer U }) => void) ? U : false //never
```