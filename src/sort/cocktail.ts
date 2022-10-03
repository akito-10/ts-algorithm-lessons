export const cocktail = (array: number[]) => {
  const targetArray = [...array];
  let swapped = true;
  let start = 0;
  let end = targetArray.length - 1;

  while (swapped) {
    swapped = false;
    for (let i = start; i < end; i++) {
      if (targetArray[i] > targetArray[i + 1]) {
        [targetArray[i], targetArray[i + 1]] = [
          targetArray[i + 1],
          targetArray[i],
        ];
        swapped = true;
      }
    }
    if (!swapped) break;

    swapped = false;
    end = end - 1;
    for (let i = end - 1; i > start - 1; i--) {
      if (targetArray[i] > targetArray[i + 1]) {
        [targetArray[i], targetArray[i + 1]] = [
          targetArray[i + 1],
          targetArray[i],
        ];
        swapped = true;
      }
    }

    start = start + 1;
  }

  return targetArray;
};
