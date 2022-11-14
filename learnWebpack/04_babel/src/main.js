const message = 'Hello World'

const foo = (info) => {
  console.log(info)
}

foo(message)

const p = new Promise((resolve, reject) => {
  resolve(1)
})