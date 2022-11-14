const {Sequelize, DataTypes, Model, Op} = require('sequelize')

const sequelize = new Sequelize('coderhub', 'root', 'Zyp11111', {
  host: 'localhost',
  dialect: 'mysql'
})

class Student extends Model {
}

Student.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNotNull: false
  },
  age: DataTypes.INTEGER
}, {
  tableName: 'students',
  createdAt: false,
  updatedAt: false,
  sequelize
})

class Course extends Model {
}

Course.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNotNull: false
  },
  price: DataTypes.INTEGER
}, {
  tableName: 'courses',
  createdAt: false,
  updatedAt: false,
  sequelize
})

class StudentCourse extends Model {
}

StudentCourse.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    field: 'student_id',
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: 'id'
    }
  },
  courseId: {
    field: 'course_id',
    type: DataTypes.INTEGER,
    references: {
      model: Course,
      key: 'id'
    }
  }
}, {
  tableName: 'students_select_courses',
  createdAt: false,
  updatedAt: false,
  sequelize
})

// 多对多关系的联系
Student.belongsToMany(Course, {
  through: StudentCourse,
  foreignKey: 'studentId',
  otherKey: 'courseId'
})

Course.belongsToMany(Student, {
  through: StudentCourse,
  foreignKey: 'courseId',
  otherKey: 'studentId'
})

async function queryProducts() {
  const result = await Student.findAll({
    include: {
      model: Course
    }
  })

  console.log(result)
}

queryProducts()