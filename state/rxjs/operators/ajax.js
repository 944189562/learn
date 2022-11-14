import { ajax } from "./esm/ajax/index.js";

const source$ = ajax("https://api.github.com/repos/reactivex/rxjs/issues");
source$.subscribe((result) => console.log(result.response));
