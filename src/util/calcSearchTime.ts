export const calcSearchTime = (
  key: string,
  searchFunction: (target: number[], targetValue: number) => number,
  targetArray: number[],
  targetValue: number
) => {
  const start = performance.now();
  const result = searchFunction(targetArray, targetValue);
  const end = performance.now();
  const data = {
    key,
    isSearched: result !== -1,
    targetArray: targetArray.reduce((acc, curr) => {
      if (acc === "") {
        return `${curr}`;
      }

      return acc + ", " + curr;
    }, ""),
    targetValue,
    result: result,
    time: `${end - start}ms`,
  };
  console.table(data);
};
