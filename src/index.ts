import { bogo } from "./sort/bogo";
import { bubble } from "./sort/bubble";
import { cocktail } from "./sort/cocktail";
import { comb } from "./sort/comb";
import { selection } from "./sort/selection";
import { calSortTime } from "./util/calcSortTime";

const TEST_NUMBER_RANGE = 100;
const TEST_NUMBER_QUANTITY = 10;

const testArray = Array(TEST_NUMBER_QUANTITY)
  .fill(0)
  .map(() => {
    return Math.floor(Math.random() * TEST_NUMBER_RANGE) + 1;
  });

// calSortTime("bogo", bogo, testArray);
// calSortTime("bubble", bubble, testArray);
// calSortTime("cocktail", cocktail, testArray);
// calSortTime("comb", comb, testArray);
calSortTime("selection", selection, testArray);
