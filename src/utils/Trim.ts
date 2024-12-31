// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

// For example

type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '
type whitespace = " " | "\n" | "\t";
type TrimLeft<T extends string> = T extends `${whitespace}${infer F}`
  ? TrimLeft<F>
  : T;
type TrimRight<T extends string> = T extends `${infer F}${whitespace}`
  ? TrimRight<F>
  : T;

// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

// For example

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'
type Trim<T extends string> = TrimRight<TrimLeft<T>>;
