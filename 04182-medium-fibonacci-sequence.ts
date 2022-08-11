// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [Expect<Equal<Fibonacci<3>, 2>>, Expect<Equal<Fibonacci<8>, 21>>];

// ============= Your Code Here =============
// 利用数据长度来做计算
// 斐波那契数列保存最新的两个值就可以持续计算下去
type Fibonacci<
  T extends number,
  Q extends number[] = [1, 1], // 循环计数
  Prev extends number[] = [0], // 计算结果1
  Cur extends number[] = [1] //计算结果2
> = T extends 1
  ? 1
  : T extends Q["length"]
  ? Cur["length"]
  : Fibonacci<T, [...Q, 0], Cur, [...Prev, ...Cur]>;
// ref： https://github.com/type-challenges/type-challenges/issues/14095
