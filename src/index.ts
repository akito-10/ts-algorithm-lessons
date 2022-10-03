import { bogo } from "./sort/bogo";

const TEST_NUMBER_RANGE = 100;
const testArray = Array(8)
  .fill(0)
  .map(() => {
    return Math.floor(Math.random() * TEST_NUMBER_RANGE);
  });

console.log("bogo", bogo(testArray));
