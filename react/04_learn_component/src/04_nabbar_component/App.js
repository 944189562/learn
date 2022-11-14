import {Component} from "react";

import './style.css'

class NavBar extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='nav-bar'>
        <div className="left">
          {this.props.children[0]}
        </div>
        <div className="main">
          {this.props.children[1]}
        </div>
        <div className="right">
          {this.props.children[2]}
        </div>
      </div>
    )
  }
}

function NavBar1(props) {
  return (
    <div className='nav-bar'>
      <div className="left">
        {props.leftSlot}
      </div>
      <div className="main">
        {props.mainSlot}
      </div>
      <div className="right">
        {props.rightSlot}
      </div>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.headerLeft = <div>left</div>
    this.headerMain = <div>main</div>
    this.headerRight = <div>right</div>
  }

  render() {
    return (
      <div>
        <NavBar>
          <div>left</div>
          <div>main</div>
          <div>right</div>
        </NavBar>
        <NavBar1 leftSlot={this.headerLeft} mainSlot={this.headerMain} rightSlot={this.headerRight}/>
      </div>
    )
  }
}