// Implement a generic GetReadonlyKeys<T> that returns a union of the readonly keys of an Object.

// For example

interface Todo {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}

// type GetReadonlyKeys<T> = keyof {
//   [K in keyof T as Equal2<Pick<T, K>, Readonly<Pick<T, K>>> extends true
//     ? K
//     : never]: T[K];
// };
type GetReadonlyKeys<T> = {
  [P in keyof Required<T>]: Equal2<
    { [K in P]: T[K] },
    { -readonly [R in P]: T[R] }
  > extends true
    ? never
    : P;
}[keyof T];

type Keys = GetReadonlyKeys<Todo>; // expected to be "title" | "description"

type Equal<A, B> = A extends B ? (B extends A ? true : false) : false;
type Y1 = Equal<string, string>; //true
type Y2 = Equal<number, string>; //false
type Y3 = Equal<number | string, string>; //boolean 分配条件类型，加联合类型
type Y4 = Equal<true | false, true>; // boolean 分配条件类型，加联合类型
type Y5 = Equal<true, true>; // true
type Y6 = Equal<true, false>; //false

// 使用元祖+ 防止分配的[]，比较结构
type Equal1<A, B> = [A, B] extends [B, A] ? true : false;
type N1 = Equal1<true | false, true>; // false
type N2 = Equal1<any, string>; //true
type N3 = Equal1<{ name: string }, { readonly name: string }>; //true

// 使用 泛型函数 类型，这让它能捕获到更多类型信息，包括接口、函数、any等
// 比较的是类型的"完整身份"，而不仅仅是结构
type Equal2<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
type X1 = Equal2<string, string>; //true
type X2 = Equal2<number, string>; //false
type X3 = Equal2<true | false, true>; // false
type X4 = Equal2<any, string>; //false
type X5 = Equal2<{ name: string }, { readonly name: string }>; //false

type ToArray<Type> = [Type] extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;

// 1. 使用联合类型和数组字面量语法
type Array1 = (string | number)[];

// 2. 使用 Array 泛型
type Array2 = Array<string | number>;
export {};
