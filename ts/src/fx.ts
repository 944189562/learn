function test<T>(arg: T): T {
  return arg
}

let res = test<number>(18)

console.log(res)

export default {}

function login<T>(arg: T[]): T[] {
  return arg
}

function login1<T>(arg: Array<T>): Array<T> {
  return arg
}

