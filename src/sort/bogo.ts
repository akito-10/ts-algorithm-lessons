import { checkInOrder } from "../util/checkInOrder";

const shuffle = (array: number[]) => {
  let targetArray = [...array];
  for (let i = targetArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [targetArray[i], targetArray[j]] = [targetArray[j], targetArray[i]];
  }
  return targetArray;
};

export const bogo = (array: number[]) => {
  let targetArray = [...array];
  while (!checkInOrder(targetArray)) targetArray = shuffle(targetArray);

  return targetArray;
};
