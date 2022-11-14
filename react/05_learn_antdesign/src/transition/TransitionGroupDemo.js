import {PureComponent} from "react";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './TransitionGroup.css'

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: ['jz', 'kobe', 'james']
    }
  }


  render() {
    const {users} = this.state
    return (
      <div>
        <h2>TransitionGroup</h2>
        <button onClick={e => this.setState({users: [...users, 'curry']})}>ADD User</button>
        <TransitionGroup>
          {
            users.map((user, index) => (
              <CSSTransition key={index} timeout={300} classNames='user'>
                <div>{user}</div>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
    )
  }
}