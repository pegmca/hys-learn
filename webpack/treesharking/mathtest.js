import { add } from "mathjs";
import { add as add2 } from "./selfMath";

function yusui(a, b) {
  const mid = 3;
  const mid2 = add2(a, b);
  return add(a, b) + mid + mid2;
}

const result = yusui(1, 2);

const hys = Array.from({ length: 10000 }, (_, i) => i).join(",");

export { result, hys };
