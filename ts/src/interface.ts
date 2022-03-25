interface User {
  readonly name: string
  age: number
  [prop: string]: any
}

let obj: User = {
  name: 'zs',
  age: 18,
  sex: 'man'
}

// 函数
interface Func {
  (name: string): string
}

let fn: Func = function (name: string): string {
  return name
}

// 混合
interface Admin {
  userName: string
  password: string
}

type Person = User | Admin

