// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Case0 = ["", "", ""];
type Case1 = ["+", "", ""];
type Case2 = ["+", "1", ""];
type Case3 = ["+", "100", ""];
type Case4 = ["+", "100", "%"];
type Case5 = ["", "100", "%"];
type Case6 = ["-", "100", "%"];
type Case7 = ["-", "100", ""];
type Case8 = ["-", "1", ""];
type Case9 = ["", "", "%"];
type Case10 = ["", "1", ""];
type Case11 = ["", "100", ""];

type cases = [
  Expect<Equal<PercentageParser<"">, Case0>>,
  Expect<Equal<PercentageParser<"+">, Case1>>,
  Expect<Equal<PercentageParser<"+1">, Case2>>,
  Expect<Equal<PercentageParser<"+100">, Case3>>,
  Expect<Equal<PercentageParser<"+100%">, Case4>>,
  Expect<Equal<PercentageParser<"100%">, Case5>>,
  Expect<Equal<PercentageParser<"-100%">, Case6>>,
  Expect<Equal<PercentageParser<"-100">, Case7>>,
  Expect<Equal<PercentageParser<"-1">, Case8>>,
  Expect<Equal<PercentageParser<"%">, Case9>>,
  Expect<Equal<PercentageParser<"1">, Case10>>,
  Expect<Equal<PercentageParser<"100">, Case11>>
];

// ============= Your Code Here =============
// 麻烦。。。需要一个一个判断
type Parser1<A extends string> = A extends `${infer H}${infer _}` ? H extends '-' | '+' ? H : '' : ''
type Parser2<A extends string> = A extends `${infer _}%` ? '%' : ''
type Parser3<A extends string> = A extends `${Parser1<A>}${infer M}${Parser2<A>}` ? M : ''
type PercentageParser<A extends string> = [Parser1<A>, Parser3<A>, Parser2<A> ]

// ref: https://github.com/type-challenges/type-challenges/issues/13079