export const merge = (array: number[]) => {
  if (array.length <= 1) {
    return array;
  }

  const center = Math.floor(array.length / 2);
  let left = array.slice(0, center);
  let right = array.slice(center);

  merge(left);
  merge(right);

  let [i, j, k] = [0, 0, 0];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      array[k] = left[i];
      i += 1;
    } else {
      array[k] = right[j];
      j += 1;
    }
    k += 1;
  }

  while (i < left.length) {
    array[k] = left[i];
    i += 1;
    k += 1;
  }
  while (j < right.length) {
    array[k] = right[j];
    j += 1;
    k += 1;
  }

  return array;
};
