// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];

// ============= Your Code Here =============
// Ans1
// type KebabCase<
//   S extends string,
//   Q extends string = ""
// > = S extends `${infer R}${infer T}`
//   ? KebabCase<
//       T,
//       R extends Lowercase<R>
//         ? `${Q}${R}`
//         : `${Q}${Q extends "" ? "":"-"}${Lowercase<R>}`
//     >
//   : Q;
// Ans2

type KebabCase<T> = T extends `${infer R}${infer P}`
  ? P extends Uncapitalize<P>
    ? `${Lowercase<R>}${KebabCase<P>}`
    : `${Lowercase<R>}-${KebabCase<P>}`
  : T;

  // ref: https://github.com/type-challenges/type-challenges/issues/13476