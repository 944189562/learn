import {Component} from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World~'
    }
  }

  componentDidMount() {
    document.getElementById('btn').addEventListener('click', () => {
      console.log('按钮点击~')
      this.setState({
        message: 'Hello React~'
      })
      console.log(this.state.message)
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button id={'btn'} onClick={() => this.btnClick()}>按钮</button>
      </div>
    )
  }

  btnClick() {
    // setTimeout 现在也是异步
    // setTimeout(() => {
    //   this.setState({
    //     message: 'Hello React~'
    //   })
    //   console.log(this.state.message)
    // }, 0)
  }
}