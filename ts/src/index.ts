// 类型
// 类型声明
let str: string = "Hello TypeScript!";
let age: number | string = 18; // 类型
let isBoolean: boolean = true;
let _null = null;
let _undefined = undefined;

age = "18";

// never 类型表示那些永远不存在的值类型
// any 该属性可以是任意类型
let arg: any = "abc";
arg = false;
arg = null;
arg = undefined;
arg = [1, 2, 3];

// 默认类型为设置的值的类型
let arg1 = true;

// arg1 = 1

export default {}; // 闭包

let message: string;

message = "hello";

let num: number;

num = 100; // 十进制
num = 0b110; // 二进制
num = 0o555; // 八进制
num = 0xf23; // 十六进制

let flag: boolean = true;

const names: string[] = ["kobe", "james"];
const ages: Array<number> = [1, 2, 3];

names.forEach((item) => {
  console.log(item.toUpperCase());
});

const myInfo: object = {
  name: "justin",
  age: "28",
  height: "188",
};

// myInfo.name = 'kobe'
// console.log(myInfo.name)
let s1: symbol = Symbol("title");
let s2: symbol = Symbol("title");

const person = {
  [s1]: "teacher",
  [s2]: "engineer",
};

let n: null = null;
let u: undefined = undefined;

function fn(name: string) {
  console.log(name.toUpperCase);
}

fn("Justin");

function printCoordinate(point: { x: number; y: number; z?: number }) {
  console.log("x坐标：", point.x);
  console.log("y坐标：", point.y);

  if (point.z) {
    console.log("z坐标：", point.z);
  }
}

printCoordinate({ x: 10, y: 30 });

let result: unknown;

function foo(): string {
  return "foo";
}

function bar(): number {
  return 123;
}

if (true) {
  result = foo();
} else {
  result = bar();
}

if (typeof result === "string") {
  console.log(result.length);
}

function loopFun(): never {
  while (true) {
    console.log("123");
  }
}

const tInfo: [string, number, boolean] = ["justin", 123, true];
const item1 = tInfo[0]; // justin, 并且知道类型是string
const item2 = tInfo[1]; // 123， 并且知道类型是number

function useState<T>(state: T): [T, (newState: T) => void] {
  let currentState = state;
  const changeState = (newState: T) => {
    currentState = newState;
  };

  return [currentState, changeState];
}

const [counter, setCounter] = useState(10);
console.log(counter);
setCounter(12);
console.log(counter);

function printId(id: string | number) {
  console.log(id);
}

printId(10);
printId("abc");

type Point = {
  x: number;
  y: number;
};

// type Point = {

// }

interface IPoint {
  x: number;
  y: number;
}

interface IPoint {
  age: number;
}

type ID = number | string;

function printId1(id: ID) {
  if (typeof id === "string") {
    // string
    console.log(id);
  } else {
    // number
    console.log(id);
  }
}

// 交叉类型
type MyType = number & string;

interface IColor {
  color: string;
}

interface IRun {
  running: () => void;
}

type NewType = IColor & IRun;

const obj1: NewType = {
  color: "red",
  running: function () {},
};

// 类型断言 as
const name = "Justin" as unknown as number;

function printMsg(msg?: string) {
  console.log(msg);
  console.log(msg!.toUpperCase());
}

type Alignment = "left" | "center" | "right";

const req = {
  url: "https://test.com",
  method: "GET",
} as const;

function request(url: string, method: "GET" | "POST") {
  console.log(url, method);
}

request(req.url, req.method as "GET");

// 函数类型
type CalcFunc = (num: number, num2: number) => void;

// function calc(fn: CalcFunc) {
//   console.log(fn.name)
//   console.log(fn(20, 30));
// }

// function sum(num1: number, num2: number) {
//   return num1 + num2
// }

// function mul(num1: number, num2: number) {
//   return num1 * num2
// }

// calc(sum)
// calc(mul)

// 调用签名
interface ICalcFn {
  name: string;
  (num1: number, num2: number): void;
}

// function calc(fn: ICalcFn) {
//   console.log(fn.name)
//   console.log(fn(20, 30));
// }

// calc(sum)
// calc(mul)

// 构造签名
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

interface IPerson {
  new (name: string): Person;
}

function factory(ctor: IPerson) {
  return new ctor("Justin");
}

console.log(factory(Person));

function foo1(x: number, y: number = 6) {
  console.log(x, y);
}

// function sum(...num: number[]) {
//   ...
// }

function sum(a1: number, a2: number): number;
function sum(a1: string, a2: string): string;
function sum(a1: any, a2: any): any {
  return a1 + a2;
}

console.log(sum(20, 30))
console.log(sum('Abraham', 'Justin'))

// function getLength(a: string | any[]) {
//   return a.length
// }

// function getLength(a: string): number;
// function getLength(a: any[]): number;
// function getLength(a: any) {
//   return a.length
// }

const obj = {
  name: 'obj',
  foo: function() {
    console.log(this.name)
  }
}

obj.foo()
// let a = obj.foo
// a()

function foo2(this: {name: string}) {
  console.log(this)
}

foo2.call({name: 'Justin'})

type ThisType = ThisParameterType<typeof foo2>

type FnType = OmitThisParameter<typeof foo2>

interface IState {
  name: string
  age: number
}

interface IData {
  state: IState
  running: () => void
  eating: () => void
}

const info: IData & ThisType<IState> = {
  state: {name: 'Justin', age: 18},
  running: function() {
    console.log(this.name)
  },
  eating: function() {

  }
}