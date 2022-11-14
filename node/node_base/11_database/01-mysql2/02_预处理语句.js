const mysql = require('mysql2')

// 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'Zyp11111'
})

// 执行SQL语句
const statement = `
  SELECT * FROM products WHERE price > ? AND score > ?;
`



connection.execute(statement, [6000, 6], (err, results) => {
  console.log(results)
  connection.end()
})