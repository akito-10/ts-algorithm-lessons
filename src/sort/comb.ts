export const comb = (array: number[]) => {
  const targetArray = [...array];
  let gap = targetArray.length;
  let swapped = true;

  while (gap !== 1 || swapped) {
    gap = gap / 1.3;
    if (gap < 1) gap = 1;

    swapped = false;

    for (let i = 0; i < targetArray.length - gap; i++) {
      if (targetArray[i] > targetArray[i + gap]) {
        [targetArray[i], targetArray[i + gap]] = [
          targetArray[i + gap],
          targetArray[i],
        ];
        swapped = true;
      }
    }
  }

  return targetArray;
};
