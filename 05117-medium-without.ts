// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

// ============= Your Code Here =============
// U 可能为数组可能为数字/字符串数组转联合类型

type Union<T> = T extends any[] ? T[number] : T;
// 这种写法会递归报警
// type Without<T, U> = T extends [...infer L, Union<U>, ...infer R]
//   ? Without<[...L, ...R], U>
//   : T;

type Without<T, U> = T extends [infer L, ...infer R]
  ? [...[L extends Union<U> ? never : L], ...Without<R, U>]
  : T;

// ref: https://github.com/type-challenges/type-challenges/issues/14118
