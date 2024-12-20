// TypeScript 4.0 is recommended in this challenge

// Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

// For example:

const add = (a: number, b: number) => a + b;

const three = add(1, 2);

const curriedAdd: Currying<typeof add> = Currying(add);

function Currying<F extends (...args: any[]) => any>(func: F) {
  return function curried(this: any, ...args: Parameters<F>[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (this: any, ...args2: Parameters<F>[]) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const five = curriedAdd(2)(3);

// The function passed to Currying may have multiple arguments, you need to correctly type it.

// In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.

// 输入：一个接受多个参数的函数
// 输出：一系列只接受单个参数的函数
// 当所有参数都被传入后，返回最终结果

// 获取函数参数类型数组
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// 获取函数返回值类型
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

// 核心柯里化类型，在柯里化过程中，返回值类型始终不变
type Currying<F extends (...args: any[]) => any> = Parameters<F> extends [
  infer First,
  ...infer Rest
]
  ? Rest["length"] extends 0
    ? (arg: First) => ReturnType<F>
    : (arg: First) => Currying<(...args: Rest) => ReturnType<F>>
  : never;
