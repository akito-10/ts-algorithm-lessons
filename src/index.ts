import { bogo } from "./sort/bogo";
import { calSortTime } from "./util/calcSortTime";

const TEST_NUMBER_RANGE = 100;
const testArray = Array(5)
  .fill(0)
  .map(() => {
    return Math.floor(Math.random() * TEST_NUMBER_RANGE);
  });

calSortTime("bogo", bogo, testArray);
