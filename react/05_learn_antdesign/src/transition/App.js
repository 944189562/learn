import React, { PureComponent } from 'react'

// import CSSTransitionDemo from './CSSTransitionDemo'
// import SwitchTransitionDemo from "./SwitchTransitionDemo";
import TransitionGroupDemo from "./TransitionGroupDemo";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/*<CSSTransitionDemo/>*/}
        {/*<SwitchTransitionDemo/>*/}
        <TransitionGroupDemo/>
      </div>
    )
  }
}
