export const binary = (array: number[], value: number) => {
  let [left, right] = [0, array.length - 1];
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === value) {
      return middle;
    } else if (array[middle] < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};
