let arr: number[] = [5, 3, 8, 4, 6];

function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j]! > arr[j + 1]!) {
        [arr[j]!, arr[j + 1]!] = [arr[j + 1]!, arr[j]!];
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
