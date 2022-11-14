import React, {PureComponent} from 'react';
import {addAction, changeBannerAction, changeRecommendAction} from "../store/actionCreators";
// import {connect} from "../utils/connect";
import {connect} from 'react-redux'

import axios from 'axios'

class Home extends PureComponent {
  componentDidMount() {
    axios({url: 'http://123.207.32.32:8000/home/multidata'})
      .then(res => {
        const {banner, recommend} = res.data.data
        this.props.getBanner(banner.list)
        this.props.getRecommend(recommend.list)
        console.log(this.props.bannerList)
      })
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
  getBanner(bannerList) {
    dispatch(changeBannerAction(bannerList))
  },
  getRecommend(recommendList) {
    dispatch(changeRecommendAction(recommendList))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)