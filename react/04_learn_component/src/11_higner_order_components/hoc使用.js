import {PureComponent} from 'react'

import UserContext from './UserContext'
import Home from './Home'

class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <UserContext.Provider value={{username: 'kobe', age: 40, height: 1.98}}>
          <Home/>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App