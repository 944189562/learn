import code from './doc.md'
import './style.css'
import 'highlight.js/styles/default.css'

const print = () => {
  console.log("main.js run start");
};

print();

document.body.innerHTML = code
