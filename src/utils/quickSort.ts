// 使用JavaScript实现快速排序
var arr: number[] = [5, 3, 7, 6, 2, 9];
function quickSort(array: number[]) {
  sort(array, 0, array.length - 1);
  return array;
}
function sort(array: number[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }
  let p = partition(array, lo, hi);
  sort(array, lo, p - 1);
  sort(array, p + 1, hi);
}
function partition(array: number[], lo: number, hi: number) {
  let target = array[lo];
  let i = lo;
  let j = hi + 1;
  while (true) {
    while (array[++i]! < target!) if (i == hi) break;
    while (array[--j]! > target!) if (j == lo) break;
    if (i >= j) break;
    swap(array, i, j);
  }
  swap(array, lo, j);
  return j;
}
function swap(array: number[], i: number, j: number) {
  [array[i], array[j]] = [array[j]!, array[i]!];
}
console.log(quickSort(arr)); // 输出: [2, 3, 5, 6, 7, 9]
