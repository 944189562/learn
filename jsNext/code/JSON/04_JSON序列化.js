const obj = {
  name: 'jz',
  age: 18,
  friends: {
    name: 'kobe'
  },
  hobbies: ['篮球', '足球']
}

localStorage.setItem('obj', JSON.stringify(obj))

const info = JSON.parse(localStorage.getItem('obj'))
