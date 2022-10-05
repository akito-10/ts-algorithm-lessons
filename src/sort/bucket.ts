import { insertion } from "./insertion";

export const bucket = (array: number[]) => {
  const maxNum = Math.max(...array);
  const size = Math.ceil(maxNum / array.length);

  const bucket: number[][] = [...Array(size)].map(() => []);
  array.forEach((item) => {
    const i = Math.floor(item / size);
    if (i !== size) {
      bucket[i].push(item);
    } else {
      bucket[i - 1].push(item);
    }
  });

  const result: number[] = [];
  bucket.forEach((item, i) => {
    result.push(...insertion(item));
  });

  return result;
};
