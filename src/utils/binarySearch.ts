// 使用JavaScript实现二分搜索（二分查找）

// 使用示例：

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const target = 7;
// 在sorted的数组中，二分查找
function binarySearch(arr: number[], target: number): number {
  if (arr.length === 0) {
    return -1;
  }
  let length = arr.length;
  let lo = 0;
  let hi = length - 1;
  while (hi >= lo) {
    let cutIndex = Math.floor((hi + lo) / 2);
    if (arr[cutIndex] === target) {
      return cutIndex;
    }
    if (arr[cutIndex]! < target) {
      lo = cutIndex + 1;
    } else {
      hi = cutIndex - 1;
    }
  }
  return -1;
}
// eslint-disable-next-line no-console
console.log(binarySearch(array, target)); // 输出：6
export {};
