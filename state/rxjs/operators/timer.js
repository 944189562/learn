import {timer} from 'rxjs'

// -------------------(0|)
// timer(3000).subscribe(data => console.log(`timer example: ${data}`))

// -------------------0---1---2---3---4--...
timer(3000, 1000).subscribe(data => console.log(`timer example: ${data}`))