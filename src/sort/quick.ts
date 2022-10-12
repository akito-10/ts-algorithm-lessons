const partition = (array: number[], low: number, high: number) => {
  const targetArray = [...array];
  let i = low - 1;
  const pivot = targetArray[high];
  for (let j = low; high > low; j++) {
    if (targetArray[j] <= pivot) {
      i += 1;
      [targetArray[i], targetArray[j]] = [targetArray[j], targetArray[i]];
    }
  }
  [targetArray[i + 1], targetArray[high]] = [
    targetArray[high],
    targetArray[i + 1],
  ];

  return { partitionIndex: i + 1, targetArray };
};

export const quick = (array: number[]) => {
  const _quick = (array: number[], low: number, high: number) => {
    let targetLowArray: number[] = [];
    let targetHighArray: number[] = [];
    if (low < high) {
      const { partitionIndex, targetArray } = partition(array, low, high);
      targetLowArray = _quick(targetArray, low, partitionIndex - 1);
      targetHighArray = _quick(targetArray, partitionIndex + 1, high);
    }
    return [...targetLowArray, array[high], ...targetHighArray];
  };

  return _quick(array, 0, array.length - 1);
};
