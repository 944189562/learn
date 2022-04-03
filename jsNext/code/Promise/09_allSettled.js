const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 1000)
})
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject(4), 1000)
})

Promise.allSettled([p1, p2, p3, p4])
  .then(res => console.log('res => ', res))
  .catch(err => console.log('err => ', err))
// res =>  [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'fulfilled', value: 3 },
//   { status: 'rejected', reason: 4 }
// ]