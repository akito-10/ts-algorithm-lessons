export const insertion = (array: number[]) => {
  const targetArray = [...array];

  for (let i = 1; i < targetArray.length; i++) {
    let temp = targetArray[i];
    let j = i - 1;
    while (j >= 0 && targetArray[j] > temp) {
      targetArray[j + 1] = targetArray[j];
      j -= 1;
    }

    targetArray[j + 1] = temp;
  }

  return targetArray;
};
