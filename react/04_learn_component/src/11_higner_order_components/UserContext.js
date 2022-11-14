import {createContext} from 'react'

const UserContext = createContext({
  username: 'jz',
  age: 18,
  height: 1.75
})

export default UserContext