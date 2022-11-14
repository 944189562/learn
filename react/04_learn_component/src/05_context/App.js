import React, {Component} from "react";

const UserContext = React.createContext({
  username: 'kobe',
  age: 40
})

class ProfileChild extends Component {
  static contextType = UserContext

  render() {
    let {username, age} = this.context
    return (
      <div>
        <p>{username}</p>
        <p>{age}</p>
      </div>
    )
  }
}

function ProfileChild1() {
  return (
    <UserContext.Consumer>
      {
        ({username, age}) => (
          <div>
            <p>{username}</p>
            <p>{age}</p>
          </div>
        )
      }
    </UserContext.Consumer>
  )
}

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <ProfileChild/>
      <ProfileChild1/>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'jz',
      age: 18
    }
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile/>
        </UserContext.Provider>
      </div>
    )
  }
}