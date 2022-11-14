import {PureComponent} from 'react'

class Login extends PureComponent {
  render() {
    return (
      <div>登录</div>
    )
  }
}

function withAuth(WrappedComponent) {
  return props => {
    if (props.isLogin) {
      return <WrappedComponent {...props}/>
    } else {
      return <Login/>
    }
  }
}

const AuthHome = withAuth(function Home(props) {
  return (
    <div><h2>Home: {props.name}</h2></div>
  )
})

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: true
    }
  }

  render() {
    return (
      <div>
        <h2>App</h2>
        <AuthHome isLogin={this.state.isLogin} name={'home'}/>
      </div>
    )
  }
}