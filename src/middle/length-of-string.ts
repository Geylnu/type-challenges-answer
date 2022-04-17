/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal
  
  ### Question
  
  Compute the length of a string literal, which behaves like `String#length`.
  
  > View on GitHub: https://tsch.js.org/298
*/


/* _____________ Your Code Here _____________ */

/**
 * TODO: 
 * 为什么这里不会匹配 '',而在其他场景可能会匹配 ''
 */
type Chars<S extends string> = S extends `${infer Char}${infer Rest}` ? [Char, ...Chars<Rest>] : [];
type LengthOfTuple<T extends readonly unknown[]> = T extends { readonly length: infer L } ? L : never; 
type LengthOfString<S extends string> = LengthOfTuple<Chars<S>>;

type a = Chars<'f'>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/

