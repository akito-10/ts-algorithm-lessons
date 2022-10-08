const counting = (array: number[], place: number) => {
  const counts = [...Array(10)].map(() => 0);
  const result = [...Array(array.length)].map(() => 0);

  array.forEach((item) => {
    let index = Math.floor(item / place) % 10;
    counts[index] += 1;
  });

  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  let i = array.length - 1;
  while (i >= 0) {
    const index = Math.floor(array[i] / place) % 10;
    result[counts[index] - 1] = array[i];
    counts[index] -= 1;
    i -= 1;
  }

  return result;
};

export const radix = (array: number[]) => {
  let targetArray = [...array];
  const maxNum = Math.max(...array);
  let place = 1;
  while (maxNum > place) {
    targetArray = counting(targetArray, place);
    place *= 10;
  }

  return targetArray;
};
