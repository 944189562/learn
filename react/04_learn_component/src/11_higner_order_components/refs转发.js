import {createRef, forwardRef, PureComponent} from 'react'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <label htmlFor="username">username</label><input type="text" name={'username'} id={'username'}/>
      </div>
    )
  }
}

const LogHome = logProps(class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <label htmlFor="username">username</label><input type="text" name={'username'} id={'username'}/>
      </div>
    )
  }
})

function FancyButton(props) {
  return (
    <button ref={props.forwardedRef}>按钮</button>
  )
}

function logProps(WrappedComponent) {
  class LogProps extends PureComponent {
    render() {
      const {forwardedRef, ...rest} = this.props
      return <WrappedComponent {...rest} ref={forwardedRef}/>
    }
  }

  return forwardRef((props, ref) => <LogProps {...props} forwardedRef={ref}/>)
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.inputRef = createRef()
    this.homeRef = createRef()
    this.btnRef = createRef()
  }

  render() {
    return (
      <div>
        <h2>App</h2>
        <button onClick={e => this.logRef()}>log ref</button>
        <LogHome ref={this.inputRef}/>
        <Home ref={this.homeRef}/>
        {/*<FancyButton ref={this.btnRef}/>*/}
      </div>
    )
  }

  logRef() {
    console.log(this.inputRef.current)
  }
}