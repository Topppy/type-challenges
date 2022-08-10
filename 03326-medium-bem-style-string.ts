// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]


// ============= Your Code Here =============
// 1. 数组转联合类型
// 2. 拼接字符串
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${E extends [] ? '': `__${E[number]}`}${M extends []? '' : `--${M[number]}`}`

// ref: https://github.com/type-challenges/type-challenges/issues/13887