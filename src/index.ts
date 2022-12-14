import { binary } from "./search/binary";
import { binaryByRecursive } from "./search/binaryByRecursive";
import { linear } from "./search/linear";
import { bogo } from "./sort/bogo";
import { bubble } from "./sort/bubble";
import { bucket } from "./sort/bucket";
import { cocktail } from "./sort/cocktail";
import { comb } from "./sort/comb";
import { counting } from "./sort/counting";
import { gnome } from "./sort/gnome";
import { insertion } from "./sort/insertion";
import { merge } from "./sort/merge";
import { quick } from "./sort/quick";
import { radix } from "./sort/radix";
import { selection } from "./sort/selection";
import { shell } from "./sort/shell";
import { calcSearchTime } from "./util/calcSearchTime";
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
// calSortTime("selection", selection, testArray);
// calSortTime("gnome", gnome, testArray);
// calSortTime("insertion", insertion, testArray);
// calSortTime("bucket", bucket, testArray);
// calSortTime("shell", shell, testArray);
// calSortTime("counting", counting, testArray);
// calSortTime("radix", radix, testArray);
// calSortTime("quick", quick, testArray);
// calSortTime("merge", merge, testArray);
// calcSearchTime("linear", linear, comb(testArray), testArray[4]);
// calcSearchTime("binary", binary, comb(testArray), testArray[4]);
calcSearchTime(
  "binaryByRecursive",
  binaryByRecursive,
  comb(testArray),
  testArray[4]
);
