import { format } from "./utils/format";
import _ from "lodash";

const foo = (message) => {
  console.log(message);
};

const message = "Hello rollup";

foo(message);
console.log(format("2022/07/01"));

console.log(_.join(["123", "234"]));

export { foo };
