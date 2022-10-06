export const shell = (array: number[]) => {
  const targetArray = [...array];
  let gap = Math.floor(targetArray.length / 2);

  while (gap > 0) {
    for (let i = gap; i < targetArray.length; i++) {
      const temp = targetArray[i];
      let j = i;
      while (j >= gap && targetArray[j - gap] > temp) {
        targetArray[j] = targetArray[j - gap];
        j -= gap;
      }
      targetArray[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return targetArray;
};
