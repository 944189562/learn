interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}

let user: Person = { firstName: 'Jane', lastName: 'User' }

class Student {
  fullName: string
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

let user1 = new Student('zs', 'M.', 'li')

console.log(user1)

let ro: ReadonlyArray<number> = [1, 2, 3]
// ro[0] = 1

let a = ro as number[]
a[0] = 5

interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return { color: 'string', area: 1 }
}

// createSquare({clorur: '1', width: 1} as SquareConfig)

interface SearchFunc {
  (source: string, subString: string): boolean
}

// interface 定义函数
let mySearch: SearchFunc
mySearch = function (source: string, subString: string): boolean {
  return false
}

mySearch = function (src: string, sub: string): boolean {
  return false
}

mySearch = function (src, sub) {
  return false
}

// 可索引的类型
interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['Blob', 'zs']

let myStr: string = myArray[0]

interface NumberDictinnary {
  [index: string]: number
  length: number
  // name: string // 只能
  age: number
}

// 不能给索引赋值
interface ReadonlyStrngArray {
  readonly [index: number]: string
}

let readonlyStringArray: ReadonlyStrngArray = ['zs', 'ls']

// readonlyStringArray[2] = 'haha'

// 类类型
interface IClock {
  currentTime: Date
  setTime(d: Date): void
}

class Clock implements IClock {
  currentTime: Date = new Date()
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {
    this.setTime(new Date())
  }
}

export default {}
