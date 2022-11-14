import {Component} from "react";

import ChildClass from "./Child_class";
import ChildFunc from './Child2_func'

function CounterBtn(props) {
  return <button onClick={props.increment}>+1</button>
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>组件通信</h2>
        <button onClick={() => this.handlerShow()}>{this.state.isShow ? '隐藏' : '显示'}</button>
        {this.state.isShow && <ChildClass/>}
        <ChildFunc name={"jz"} age={18} height={1.75}/>
        <h3>counter: {this.state.counter}</h3>
        <button onClick={() => this.increment()}>+1</button>
        <CounterBtn increment={() => this.increment()}/>
      </div>
    )
  }

  handlerShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}