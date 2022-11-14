const express = require('express')

// express 是一个函数 createApplication
// 返回 app
const app = express()

const USERNAME_DOES_NOT_EXIST = 'user already exist'

app.post('/login', (req, res, next) => {
  const isExit = true
  if (!isExit) {
    res.json('user register success')
  } else {
    // res.status(400)
    // res.json('user already exist')
    next(new Error(USERNAME_DOES_NOT_EXIST))
  }
})

app.use((err, req, res, next) => {
  let status = 400
  let message = ''

  switch (err.message) {
    case USERNAME_DOES_NOT_EXIST:
      message = 'username does not exist~'
      break
    default:
      message = 'not found'
  }

  res.status(status)
  res.json({
    errCode: status,
    errMessage: message
  })
})


app.listen(8000, () => {
  console.log('express 初体验启动成功')
})