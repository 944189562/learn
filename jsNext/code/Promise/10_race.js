const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1500)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 2000)
})
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject(4), 2500)
})

Promise.race([p1, p2, p3, p4])
  .then(res => console.log('res => ', res))
  .catch(err => console.log('err => ', err))