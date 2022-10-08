export const counting = (array: number[]) => {
  const maxNum = Math.max(...array);
  const counts = [...Array(maxNum + 1)].map(() => 0);
  const result = [...Array(array.length)].map(() => 0);

  array.forEach((item) => {
    counts[item] += 1;
  });

  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  let i = array.length - 1;
  while (i >= 0) {
    const index = array[i];
    result[counts[index] - 1] = array[i];
    counts[index] -= 1;
    i -= 1;
  }

  return result;
};
