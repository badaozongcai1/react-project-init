// 使用JavaScript实现顺序搜索

// 测试数据
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sequentialSearch(array: number[], target: number): number {
  if (array.length === 0) {
    return -1;
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
}
console.log(sequentialSearch(arr, 5)); // 输出: 4

console.log(sequentialSearch(arr, 10)); // 输出: -1
