const {Sequelize, DataTypes, Model, Op} = require('sequelize')

const sequelize = new Sequelize('coderhub', 'root', 'Zyp11111', {
  host: 'localhost',
  dialect: 'mysql'
})

class Brand extends Model {
}

Brand.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNotNull: false
  },
  website: {
    type: DataTypes.STRING
  },
  phoneRank: DataTypes.INTEGER,
}, {
  tableName: 'brand',
  createdAt: false,
  updatedAt: false,
  sequelize
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
  score: DataTypes.DOUBLE,
  brandId: {
    field: 'brand_id',
    type: DataTypes.INTEGER,
    references: {
      model: Brand,
      key: 'id'
    }
  }
}, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
})

// 将两张表联系在一起
Product.belongsTo(Brand, {
  foreignKey: 'brandId'
})

async function queryProducts() {
  const result = await Product.findAll({
    include: {
      model: Brand
    }
  })

  console.log(result)
}

queryProducts()