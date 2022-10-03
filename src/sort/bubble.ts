export const bubble = (array: number[]) => {
  const targetArray = [...array];
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength - 1 - i; j++) {
      if (targetArray[j] > targetArray[j + 1]) {
        // もし次の要素が現在の要素より大きい場合に、分割代入により並べ替え
        [targetArray[j], targetArray[j + 1]] = [
          targetArray[j + 1],
          targetArray[j],
        ];
      }
    }
  }

  return targetArray;
};
