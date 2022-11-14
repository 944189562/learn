import {PureComponent} from "react";
import {EventEmitter} from 'events'

const eventBus = new EventEmitter()

class Home extends PureComponent {
  componentDidMount() {
    eventBus.addListener('home', this.handlerEvent)
  }

  componentWillUnmount() {
    eventBus.removeListener('home', this.handlerEvent)
  }

  render() {
    return (
      <h2>Home</h2>
    )
  }

  handlerEvent(...args) {
    console.log(...args)
  }
}

class Main extends PureComponent {
  render() {
    return (
      <div>
        <h2>Main</h2>
        <button onClick={() => this.handlerEmit()}>与Home通信</button>
      </div>
    )
  }

  handlerEmit() {
    eventBus.emit('home', 123, 'Hello Home')
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>Hello EventBus</h2>
        <Home/>
        <Main/>
      </div>
    )
  }
}