// 使用JavaScript实现选择排序
// 测试数据
let arr: number[] = [5, 3, 2, 4, 1];

function selectionSort(array: number[]): number[] {
  for (let left = 0; left < array.length; left++) {
    let minIndex = left;
    for (let right = left; right < array.length; right++) {
      if (array[minIndex]! > array[right]!) {
        minIndex = right;
      }
    }
    if (minIndex !== left) {
      [array[left]!, array[minIndex]!] = [array[minIndex]!, array[left]!];
    }
  }
  return array;
}
console.log(selectionSort(arr));
export {}
