// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
];

// ============= Your Code Here =============
type Reverse<T> = T extends [infer R, ...infer P] ? [...Reverse<P>, R] : T;
type FlipArguments<T> = T extends (...args: infer P) => infer Q
  ? (...args: Reverse<P>) => Q
  : never;
