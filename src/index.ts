import { bogo } from "./sort/bogo";
import { bubble } from "./sort/bubble";
import { calSortTime } from "./util/calcSortTime";

const TEST_NUMBER_RANGE = 100;
const TEST_NUMBER_QUANTITY = 10;

const testArray = Array(TEST_NUMBER_QUANTITY)
  .fill(0)
  .map(() => {
    return Math.floor(Math.random() * TEST_NUMBER_RANGE) + 1;
  });

// calSortTime("bogo", bogo, testArray);
calSortTime("bubble", bubble, testArray);
