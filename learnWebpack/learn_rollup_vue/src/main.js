import { format } from "./utils/format";
import _ from "lodash";
import "./css/style.css";

import { createApp } from "vue";
import VueApp from "./App.vue";

createApp(VueApp).mount('#app')

const foo = (message) => {
  console.log(message);
};

const message = "Hello rollup";

foo(message);
console.log(format("2022/07/01"));

console.log(_.join(["123", "234", '456']));

export { foo };
