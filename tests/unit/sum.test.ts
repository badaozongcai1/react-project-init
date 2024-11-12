import sum from "@/utils/sum"; // 使用 ES6 的 import 语法替代 require

describe("sum function", () => {
  // 可选：添加 describe 块来组织测试
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
