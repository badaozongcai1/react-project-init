// 使用JavaScript实现插入排序
let arr = [12, 11, 13, 5, 6];
function insertionSort(array: number[]) {
  outLoop: for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j]! < array[j - 1]!) {
        [array[j], array[j - 1]] = [array[j - 1]!, array[j]!];
      } else {
        continue outLoop;
      }
    }
  }
  return array;
}
console.log("Sorted array is:", insertionSort(arr));
