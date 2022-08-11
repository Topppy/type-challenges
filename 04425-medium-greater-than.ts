// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>
];

// ============= Your Code Here =============
// 利用数组长度计数，如果T先等于计数，证明T更小返回false，如果U先等于计数证明U更小返回true，都没到就继续计数
// type GreaterThan<
//   T extends number,
//   U extends number,
//   P extends any[] = []
// > = P["length"] extends T
//   ? false
//   : P["length"] extends U
//   ? true
//   : GreaterThan<T, U, [...P, 0]>;

// 方法2：非递归,ref: https://github.com/type-challenges/type-challenges/issues/14098
type ArrLen<T extends number, U extends any[] = []> = U["length"] extends T
  ? U
  : ArrLen<T, [...U, 0]>;

type GreaterThan<T extends number, U extends number> = ArrLen<U> extends [...ArrLen<T>, ...any]
  ? false
  : true;
