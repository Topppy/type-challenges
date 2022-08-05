// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsUnion<string>, false >>,
  Expect<Equal<IsUnion<string|number>, true >>,
  Expect<Equal<IsUnion<'a'|'b'|'c'|'d'>, true >>,
  Expect<Equal<IsUnion<undefined|null|void|''>, true >>,
  Expect<Equal<IsUnion<{ a: string }|{ a: number }>, true >>,
  Expect<Equal<IsUnion<{ a: string|number }>, false >>,
  Expect<Equal<IsUnion<[string|number]>, false >>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string|never>, false >>,
  Expect<Equal<IsUnion<string|unknown>, false >>,
  Expect<Equal<IsUnion<string|any>, false >>,
  Expect<Equal<IsUnion<string|'a'>, false >>,
]


// ============= Your Code Here =============
type IsUnion<T, P = T> = T extends P ? [P] extends [T] ? false: true: false
// T extends P 之后如果T为联合类型会犹豫分配律变为联合类型中的一项，此时P依旧是联合类型，[T]范围会变得比 [P]小，extends就不成立，反证T是联合类型
// [string|number] extends [string]  === false


// ref： https://github.com/type-challenges/type-challenges/issues/13987