// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// }
// Record 是 TypeScript 的一个工具类型，用来创建一个  对象类型，
// 其中所有属性的键(key)都是 K 类型，值(value)都是 T 类型
// 创建一个对象类型，所有键都是字符串，值都是 number
// type NumberRecord = Record<string, number>;
// // 等价于
// type NumberRecord = {
//     [key: string]: number;
// }
declare function SimpleVue<
  D extends Record<string, unknown>, // 键为字符串，值为任意类型的对象
  C extends Record<string, unknown>,
  M extends Record<string, unknown>
>(options: {
  // this: never 表示在 data 函数中不能使用 this
  data: (this: never) => D;
  // this 类型被限定为 D（只能访问 data 的属性）
  //   ... 表示收集所有剩余的参数到一个数组中
  // unknown[] 表示这个数组可以包含任何类型的值
  computed: { [K in keyof C]: (this: D, ...args: unknown[]) => C[K] };
  methods: {
    [K in keyof M]: (
      this: D & C & { [K in keyof M]: (...args: unknown[]) => M[K] }
    ) => M[K];
  };
}): any;

const instance = SimpleVue({
  data() {
    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10,
    };
  },
  computed: {
    fullname() {
      // this 可以访问 data 中的属性
      return this.firstname + " " + this.lastname;
    },
  },
  methods: {
    hi() {
      // this 可以访问 data 和 computed 中的属性
      alert(this.fullname.toLowerCase());
    },
  },
});
