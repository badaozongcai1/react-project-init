// Implement Replace<S, From, To> which replace the string From with To once in the given string S

// For example

type replaced1 = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer L}${From}${infer R}` ? `${L}${To}${R}` : S;
// ---我是分割线---

// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

// For example

type replaced2 = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : S;
