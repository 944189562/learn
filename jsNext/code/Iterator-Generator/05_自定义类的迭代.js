class Classroom {
  constructor(adderss, name, students) {
    this.address = adderss
    this.name = name
    this.students = students
  }

  entry(student) {
    this.students.push(student)
  }

  [Symbol.iterator]() {
    let index = 0

    return {
      next: () => {
        if (index < this.students.length) {
          return {done: false, value: this.students[index++]}
        } else {
          return {done: true, value: undefined}
        }
      },
      return: () => {
        console.log('迭代器提前终止')
        return {
          done: true,
          value: undefined
        }
      }
    }
  }
}

const classroom = new Classroom('3#802', 'room', ['james', 'kobe', 'jz'])
classroom.entry('lilei')

for (let stu of classroom) {
  console.log(stu)
  // 终止迭代器
  if (stu === 'jz') break
}