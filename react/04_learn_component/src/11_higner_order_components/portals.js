import {PureComponent} from 'react'
import * as ReactDOM from 'react-dom';

class Modal extends PureComponent {
  constructor(props) {
    super(props);

    this.el = document.createDocumentFragment()
  }

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Modal>
        <h2>title</h2>
      </Modal>
    </div>
  )
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Home/>
      </div>
    )
  }
}