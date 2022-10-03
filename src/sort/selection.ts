export const selection = (array: number[]) => {
  const targetArray = [...array];
  for (let i = 0; i < targetArray.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < targetArray.length; j++) {
      if (targetArray[minIndex] > targetArray[j]) {
        minIndex = j;
      }
    }

    [targetArray[i], targetArray[minIndex]] = [
      targetArray[minIndex],
      targetArray[i],
    ];
  }

  return targetArray;
};
