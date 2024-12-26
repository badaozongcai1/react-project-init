// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

// For example

type capitalized = Capitalize<"hello world">; // expected to be 'Hello world'

type Capitalize<T> = T extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : never;
export {};
