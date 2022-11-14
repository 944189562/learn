import {memo, PureComponent} from "react";

const MemoHeader = memo(function Header() {
  console.log('header~')
  return (
    <h2>header</h2>
  )
})

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      profiles: ['jz', 'kobe', 'james']
    }
  }

  render() {
    console.log('main render~')
    return (
      <div>
        <h2>main</h2>
        <Profile {...this.state}/>
      </div>
    )
  }
}

function Profile(props) {
  console.log('profile~')
  const {profiles} = props
  return (
    <ul>
      {
        profiles.map(item => (
          <li key={item}>{item}</li>
        ))
      }
    </ul>
  )
}

const MemoFooter = memo(function Footer() {
  console.log('footer~')
  return (
    <h2>footer</h2>
  )
})

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello World~'
    }
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log(nextState, nextProps)
  //   return true
  // }

  render() {
    console.log('App render~')
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.btnClick()}>React</button>
        <MemoHeader/>
        <Main/>
        <MemoFooter/>
      </div>
    )
  }

  btnClick() {
    this.setState({
      message: 'Hello React~'
    })
  }
}