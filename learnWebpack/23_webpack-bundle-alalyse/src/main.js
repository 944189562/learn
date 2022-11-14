import "./style.css";
import {format, math} from 'coderjz_utils'

function foo(msg) {
  console.log(msg)
}

const sum = (num1, num2) => {
  return num1 + num2
}

sum(1, 2)

console.log("indexaaaaaccccc");

const divEl = document.createElement('div')
divEl.classList.add('title')
document.body.append(divEl)

console.log(math.sum(1, 2))
console.log(format.format())