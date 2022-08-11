// ============= Test Cases =============
import type { Equal, Expect, NotEqual } from "./test-utils";

type cases = [
  Expect<Equal<{ a: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<NotEqual<{ b: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<Equal<{ 3.14: "pi"; true: "bool" }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<
    Equal<{ val2: "prop2"; val: "prop" }, Flip<{ prop: "val"; prop2: "val2" }>>
  >
];

// ============= Your Code Here =============
// 傻瓜方式是枚举判断k === true => 'true'
type Flip<T> = {
  [k in keyof T as T[k] extends string | number | boolean
    ? `${T[k]}`
    : never]: k;
};

//  ref:https://github.com/type-challenges/type-challenges/issues/14094
