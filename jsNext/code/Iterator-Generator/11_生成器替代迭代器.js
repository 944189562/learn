function* createArrayIterator(arr) {
  // 3. 第三种写法 yield*是第二种写法的语法糖
  yield* arr

  // 2. 第二种写法
  // for (const item of arr) {
  //   yield item
  // }

  // let index = 0
  // yield arr[index++]
  // yield arr[index++]
  // yield arr[index++]
// 1. 第一种写法 迭代器 iterator
  // return {
  //   next: function () {
  //     if (index < arr.length) {
  //       return {done: false, value: arr[index++]}
  //     } else {
  //       return {done: true, value: undefined}
  //     }
  //   }
  // }
}

const names = ['abc', 'cba', 'nba']
const namesIterator = createArrayIterator(names)

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

// 创建一个函数，这个函数可以迭代一个范围内的数字
function* createRangeIerator(start, end) {
  for (let i = start; i < end; i++) {
    yield i
  }

  // let index = start
  // return {
  //   next: function () {
  //     if (index < end) {
  //       return {done: false, value: index++}
  //     } else {
  //       return {done: true, value: undefined}
  //     }
  //   }
  // }
}

const rangeIterator = createRangeIerator(5, 10)
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())

class Classroom {
  constructor(adderss, name, students) {
    this.address = adderss
    this.name = name
    this.students = students
  }

  entry(student) {
    this.students.push(student)
  }

  * [Symbol.iterator]() {
    yield* this.students
    
    // let index = 0
    //
    // return {
    //   next: () => {
    //     if (index < this.students.length) {
    //       return {done: false, value: this.students[index++]}
    //     } else {
    //       return {done: true, value: undefined}
    //     }
    //   },
    //   return: () => {
    //     console.log('迭代器提前终止')
    //     return {
    //       done: true,
    //       value: undefined
    //     }
    //   }
    // }
  }
}

const classroom = new Classroom('3#802', 'room', ['james', 'kobe', 'jz'])
classroom.entry('lilei')

for (let stu of classroom) {
  console.log(stu)
  // 终止迭代器
  // if (stu === 'jz') break
}
