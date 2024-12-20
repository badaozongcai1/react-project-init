// Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?
// In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get().
// In option, you can extend the current config type by the given key and value. We should about to access the final result via get.
// For example
declare const config: Chainable;
const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();
// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: { value: string };
}
// You don't need to write any js/ts logic to handle the problem - just in type level.
// You can assume that key only accepts string and the value can be anything - just leave it as-is. Same key won't be passed twice.

// T 在未指定时默认为空对象, T 代表我们累积的配置类型
// option 接受两个泛型参数：K（继承自 string | PropertyKey）和 V（任意值类型）
// option 返回一个包含新增键值对的新 Chainable 类型
// get 简单返回累积的类型 T
type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & { [P in K]: V }>;
  get(): T;
};
export {};
