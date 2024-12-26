// Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.

// For example

type Result = RequiredKeys<{ foo: number; bar?: string }>;

// expected to be “foo”
type RequiredKeys<T> = keyof {
  [k in keyof T as T[k] extends Required<T>[k] ? k : never]: T[k];
};
export {};
