const mysql = require('mysql2')

// 1. 创建连接池
const connections = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Zyp11111',
  database: 'coderhub',
  connectionLimit: 10
})

// 2. 使用连接池
// connections.getConnection()

const statement = `
  SELECT * FROM products WHERE price > ? AND score > ?;
`

connections.promise().execute(statement, [6000, 7]).then(([result]) => {
  console.log(result)
}).catch(err => console.log(err))

