import {PureComponent} from "react";

class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
      </div>
    )
  }
}

function enhanceComponent(WrappedComponent, displayName = 'NewComponent') {
  class NewComponent extends PureComponent {
    render() {
      return <App {...this.props}/>
    }
  }

  NewComponent.displayName = displayName

  return NewComponent
}

export default enhanceComponent(App, 'haha')