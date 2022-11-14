import {Component} from "react";
import PropTypes from 'prop-types'

export default class ChildClass extends Component {

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.height}</p>
      </div>
    )
  }
}

ChildClass.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number
}

ChildClass.defaultProps = {
  name: 'kobe',
  age: 40,
  height: 1.98
}