// Implement the advanced util type GetRequired<T>, which remains all the required fields

// For example

type GetRequired<T extends {}> = {
  // [p in keyof T as p extends Required<T>[p] ? never : p]: T[p];
  // [p in keyof T as p extends Required<T[p]> ? never : p]: T[p];
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
  // [P in keyof T as T[P] extends undefined ? never : P]: T[P];
};

// type ss = string | undefined;
// type ss = undefined | string;
type aa = string extends ss ? true : false;
// type aa = "bar" extends ss ? true : false; //"bar" extends (string | undefined) 是 true,因为字符串字面量类型是可以赋值给 string 类型的。
type bb = Required<string | undefined>; // string | undefined
type I = GetRequired<{ foo: string; bar?: string }>; // expected to be { foo: number }
export {};
