let r: object = {
  name: 'zs',
  age: 18,
  sex: 'man'
}

console.log(r)

class Ren {
  name: string
  age: number
  sex?: string
  constructor(name: string, age: number, sex?: string) {
    this.name = name
    this.age = age
    this.sex = sex
  }
}

let r1: Ren = new Ren('zs', 18, 'man')
console.log(r1)

let r2: Ren = new Ren('ls', 18)
console.log(r2)
