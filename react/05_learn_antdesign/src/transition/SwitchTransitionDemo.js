import {PureComponent} from "react";
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import './SwitchTransition.css'

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state= {
      isOn: true
    }
  }


  render() {
    const {isOn} = this.state
    return (
      <>
        <h2>SwitchTransitionDemo</h2>
        <SwitchTransition>
          <CSSTransition
            key={isOn ? 'on' : 'off'}
            timeout={300}
            classNames='fade'
          >
            <button onClick={e => this.setState({isOn: !isOn})}>{isOn ? 'on' : 'off'}</button>
          </CSSTransition>
        </SwitchTransition>
      </>
    )
  }
}