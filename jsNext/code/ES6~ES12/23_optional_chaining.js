const info = {
  name: 'jz',
  age: 18,
  // friend: {
  //   name: 'yy',
  //   girlFriend: 'pp'
  // }
}

if(info.friend && info.friend.girlFriend) {
  console.log(info.friend.girlFriend)
}

console.log(info?.friend?.girlFriend)

console.log(globalThis)
console.log(this)
console.log(global === globalThis)