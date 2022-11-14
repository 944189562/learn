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
  SELECT * FROM products WHERE price > 9000;
`

connection.query(statement, (err, results, fields) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log(results);
  // 结束连接
  connection.end();
  // 强制关闭
  connection.destroy();
})

connection.on('err', () => {

})