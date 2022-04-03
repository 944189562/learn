function requestData(url) {
  return new Promise(resolve => {
    setTimeout(() => resolve(url), 1000)
  })
}

// 1. promise then
// requestData('jz').then(res => {
//   return requestData(res + 'aaa')
// }).then(res => {
//   return requestData(res + 'bbb')
// }).then(res => {
//   return requestData(res + 'ccc')
// }).then(res => console.log(res))

// 1. generator promise
// function* getData() {
//   const res1 = yield requestData('why')
//   const res2 = yield requestData(res1 + 'aaa')
//   const res3 = yield requestData(res2 + 'bbb')
//   const res4 = yield requestData(res3 + 'ccc')
//   console.log(res4)
// }

// const generator = getData('jz')
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then(res => {
//       generator.next(res)
//     })
//   })
// })

// function execGen(gen) {
//   function exec(res) {
//     const result = gen.next(res)
//     if (result.done) return result.value
//     result.value.then(res => exec(res))
//   }
//
//   exec()
// }

// function execGen(gen) {
//   function exec(res) {
//     const result = gen.next(res)
//     if (result.done) return res.value
//     result.value.then(res => exec(res))
//   }
//
//   exec()
// }

// execGen(getData())

// 3. co
// TJ 前端大神 co/n(nvm)/commander/express/koa
// const co = require('co')
// co(getData)

// 4. async/await
async function getData() {
  const res1 = await requestData('why')
  const res2 = await requestData(res1 + 'aaa')
  const res3 = await requestData(res2 + 'bbb')
  const res4 = await requestData(res3 + 'ccc')
  console.log(res4)
}

getData()