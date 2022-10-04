export const gnome = (array: number[]) => {
  const targetArray = [...array];
  let index = 0;
  while (index < targetArray.length) {
    if (!index) {
      index += 1;
    }
    if (targetArray[index] >= targetArray[index - 1]) {
      index += 1;

      continue;
    }

    [targetArray[index], targetArray[index - 1]] = [
      targetArray[index - 1],
      targetArray[index],
    ];
    index -= 1;
  }

  return targetArray;
};
