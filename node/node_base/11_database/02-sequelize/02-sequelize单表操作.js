const {Sequelize, DataTypes, Model, Op} = require('sequelize')

const sequelize = new Sequelize('coderhub', 'root', 'Zyp11111', {
  host: 'localhost',
  dialect: 'mysql'
})

class Product extends Model {

}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNotNull: false
  },
  price: {
    type: DataTypes.DOUBLE
  },
  score: DataTypes.DOUBLE
}, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
})

async function queryProducts() {
  //1. 查询表中所有内容
  // const result = await Product.findAll()
  // const result = await Product.findAll({
  //   where: {
  //     price: {
  //       [Op.gte]: 5000
  //     }
  //   }
  // })
  // console.log(result)

  // // 2. 插入数据
  // const result = await Product.create({
  //   title: '三星note10',
  //   price: 8888,
  //   score: 6.5
  // })

  // // 3. 更新数据
  // const result = await Product.update({
  //   price: 6888
  // }, {
  //   where: {
  //     id: 109
  //   }
  // })

  // 4. 删除数据
  const result = await Product.destroy({
    where: {
      id: 109
    }
  })

  console.log(result)
}

queryProducts()