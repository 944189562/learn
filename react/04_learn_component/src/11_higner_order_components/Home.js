import {PureComponent} from 'react'
import withUser from "./withUser"

class Home extends PureComponent {
  render() {
    return (
      <div>
        <p>username: {this.props.username}</p>
        <p>age: {this.props.age}</p>
        <p>height: {this.props.height}</p>
      </div>
    )
  }
}

export default withUser(Home)