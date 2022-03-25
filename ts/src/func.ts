// 函数没有返回数据的类型 void
function test(): void {
  console.log('test')
}

test()

// 返回 never 的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

function test1(name: string): void {}

function test2(name?: string, age?: number): string {
  return `${name} age => ${age}`
}
