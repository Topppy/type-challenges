// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<
    Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
  >
];

// ============= Your Code Here =============
// 实用C数组长度来记录depth
type FlattenDepth<A, B = 1, C extends any[] = []> = B extends C["length"] // 判断是否需要继续递归
  ? A
  : A extends [infer R, ...infer P]
  ? R extends any[] // 判断是否需要拍平
    ? [...FlattenDepth<R, B, [...C, any]>, ...FlattenDepth<P, B, C>] // P部分没有flatten过所以C的长度不变
    : [R, ...FlattenDepth<P, B, C>]
  : A;

// ref: https://github.com/type-challenges/type-challenges/issues/12876
