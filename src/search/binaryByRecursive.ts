export const binaryByRecursive = (array: number[], value: number) => {
  const _binaryByRecursive = (
    array: number[],
    value: number,
    left: number,
    right: number
  ): number => {
    if (left > right) {
      return -1;
    }

    let middle = Math.floor((left + right) / 2);
    if (array[middle] === value) {
      return middle;
    } else if (array[middle] < value) {
      return _binaryByRecursive(array, value, middle + 1, right);
    }
    return _binaryByRecursive(array, value, left, middle - 1);
  };

  return _binaryByRecursive(array, value, 0, array.length - 1);
};
