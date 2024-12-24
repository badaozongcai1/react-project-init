// Implement the advanced util type GetRequired<T>, which remains all the required fields
// For example
type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }
type GetRequired<T extends {}> = {
  [P in keyof T as P extends Required<T>[P] ? never : P]: T[P];
};
export {};
