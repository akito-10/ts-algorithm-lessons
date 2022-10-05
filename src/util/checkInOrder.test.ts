import { checkInOrder } from "./checkInOrder";

describe("src/util/checkInOrder.test.ts", () => {
  test("not in order array", () => {
    const notInOrderArray = [3, 1, 2];
    const result = checkInOrder(notInOrderArray);
    expect(result).toBeFalsy();
  });
  test("in order array", () => {
    const notInOrderArray = [1, 2, 3];
    const result = checkInOrder(notInOrderArray);
    expect(result).toBeTruthy();
  });
});
