// Implement the built-in ReturnType<T> generic without using it.
// For example
type MyReturnType<T> = T extends (...args: any) => infer T ? T : never;
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
type a = MyReturnType<typeof fn>; // should be "1 | 2"
