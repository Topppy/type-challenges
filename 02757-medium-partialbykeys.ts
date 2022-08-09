// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
]


// ============= Your Code Here =============
type Simplify<T> = { [K in keyof T]: T[K] };
//
type PartialByKeys<T, K = keyof T> = Simplify<{
  [k in keyof T as k extends K ?  k : never]? : T[k]
} & {
  [k in keyof T as k extends K ?  never : k] : T[k]
}>
