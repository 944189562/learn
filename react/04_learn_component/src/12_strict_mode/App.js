import {PureComponent, StrictMode} from "react";

function Home() {
  return <h2>Home</h2>
}

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    console.log('Profile')
  }

  // componentWillMount() {
  //   console.log('组件将被挂载~')
  // }

  render() {
    return <h2>Profile</h2>
  }

}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <StrictMode>
          <Home/>
          <Profile/>
        </StrictMode>
      </div>
    )
  }
}