import {PureComponent} from "react";
import {StoreContext} from "./context";

// connect 封装
// context 传递store
export function connect(mapStateToProps, mapDispachToProp) {
  return function enhanceHOC(WrappedComponent) {
    class enhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props);

        const store = context
        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }

      componentDidMount() {
        const store = this.context

        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const store = this.context

        return <WrappedComponent {...this.props}
          {...mapStateToProps(store.getState())}
          {...mapDispachToProp(store.dispatch)}/>
      }
    }

    enhanceComponent.contextType = StoreContext

    return enhanceComponent
  }
}