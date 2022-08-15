// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
];

// ============= Your Code Here =============
// type Chunk<
//   T extends any[],
//   P extends number,
//   Res extends any[] = [],
//   Cur extends any[] = []
// > = [T] extends [never]
//   ? Res
//   : T extends [infer L, ...infer R]
//   ? Cur["length"] extends P
//     ? Chunk<R, P, [...Res, Cur], [L]>
//     : Chunk<R, P, Res, [...Cur, L]>
//   : Cur extends []
//   ? Res
//   : [...Res, Cur];

// ref: https://github.com/type-challenges/type-challenges/issues/14101

type Chunk<
  T extends any[],
  P extends number,
  Temp extends any[] = []
> = P extends Temp["length"]
  ? [Temp, ...Chunk<T, P>]
  : T extends [infer L, ...infer R]
  ? Chunk<R, P, [...Temp, L]>
  : Temp extends []
  ? []
  : [Temp];
