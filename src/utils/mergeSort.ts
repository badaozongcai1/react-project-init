// 使用javascript实现归并排序
let array = [4, 2, 5, 1, 6, 3];
function mergeSort(arr: number[]) {
  if (arr.length <= 1) return arr;
  sort(arr, 0, arr.length - 1);
  return arr;
}
function sort(array: number[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }
  let mid = Math.floor(lo + (hi - lo) / 2);
  sort(array, lo, mid);
  sort(array, mid + 1, hi);
  merge(array, lo, mid, hi);
}
function merge(array: number[], lo: number, mid: number, hi: number) {
  let extArr: number[] = [];
  for (let k = lo; k <= hi; k++) {
    extArr.push(array[k]!);
  }

  let i = 0;
  let j = mid - lo + 1;
  let extMid = mid - lo;

  for (let k = lo; k <= hi; k++) {
    if (i > extMid) {
      array[k] = extArr[j++]!;
    } else if (j > extArr.length - 1) {
      array[k] = extArr[i++]!;
    } else if (less(i, j)) {
      array[k] = extArr[i++]!;
    } else {
      array[k] = extArr[j++]!;
    }
  }
  function less(i: number, j: number) {
    return extArr[i]! < extArr[j]!;
  }
}

console.log("Sorted array is:", mergeSort(array));
