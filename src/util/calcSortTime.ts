export const calSortTime = (
  key: string,
  sortFunction: (target: number[]) => number[],
  targetArray: number[]
) => {
  const start = performance.now();
  const result = sortFunction(targetArray);
  const end = performance.now();
  const data = {
    key,
    result: result.reduce((acc, curr) => {
      if (acc === "") {
        return `${curr}`;
      }

      return acc + ", " + curr;
    }, ""),
    time: `${end - start}ms`,
  };
  console.table(data);
};
