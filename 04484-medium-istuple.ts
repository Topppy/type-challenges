// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>
];

// ============= Your Code Here =============
// 1. never
// 2. tuple
// 3. readonly tuple
// 4. 空
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends [any] | readonly [any]
  ? true
  : T extends []
  ? true
  : false;

// ref : https://github.com/type-challenges/type-challenges/issues/14100
// 元组和数组的区别在于，元组的长度是有限的，数组是无限的，也就是他们的 ['length'] 返回的结果是不同的

// 元组返回的是数字
// 数组返回的是 number
