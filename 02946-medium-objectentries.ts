// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>
];

// ============= Your Code Here =============
// type b =ObjectEntries<Partial<Model> // ["name", string | undefined] | ["age", number | undefined] | ["locations", string[] | null | undefined]
// 需要把可选属性值的undefined移除,还需要排除非可选，值为undefined,也就是只需要处理联合类型，利用联合类型数组化没有分配律特性
// T = string | undefined 时为false，T=undefined时为true
type RemoveUndefined<T> = [T] extends [undefined] ? T: Exclude<T, undefined>
type ObjectEntries<T> = { [K in keyof T]-?: [K, RemoveUndefined<T[K]>] }[keyof T]
// ref: https://github.com/type-challenges/type-challenges/issues/14052

 