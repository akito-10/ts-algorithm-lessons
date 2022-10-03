export const checkInOrder = (array: number[]) => {
  return array.every((_, i) => !array[i + 1] || array[i] <= array[i + 1]);
};
