import React, {PureComponent} from 'react';
import {addAction, getHomeMultidataAction} from "../store/actionCreators";
import {connect} from 'react-redux'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata()
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
        <hr/>
        <h2>Banner</h2>
        <ul>
          {
            this.props.bannerList.map(item => (
              <li key={item.acm}>{item.title}</li>
            ))
          }
        </ul>
        <hr/>
        <h2>Recommend</h2>
        <ul>
          {
            this.props.recommendList.map(item => (
              <li key={item.acm}>{item.title}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  bannerList: state.bannerList,
  recommendList: state.recommendList
})
const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(addAction(1))
  },
  addNumber(num) {
    dispatch(addAction(num))
  },
  getHomeMultidata() {
    dispatch(getHomeMultidataAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)