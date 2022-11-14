import {Component} from "react";
import './tab.css'

class Tab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIdx: 0
    }
  }

  render() {
    return (
      <ul className="tab-group">
        {
          this.props.titles.map((title, index) => {
            return (
              <li
                className={'tab-item ' + (this.state.currentIdx === index ? 'active' : '')}
                key={title}
                onClick={() => this.changeTab(index)}>
                <span>{title}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }

  changeTab(index) {
    this.setState({
      currentIdx: index
    })
    this.props.changeTab(index)
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.titles = ['流行', '新款', '精选']

    this.state = {
      content: this.titles[0]
    }
  }

  render() {
    return (
      <div>
        <Tab titles={this.titles} changeTab={index => this.displayContent(index)}/>
        <h2>{this.state.content}</h2>
      </div>
    )
  }

  displayContent(index) {
    const title = this.titles[index]
    this.setState({
      content: title
    })
  }
}