import {GET_BANNER, GET_RECOMMEND, GET_MULTIDATA} from './constants.js'
import axios from 'axios'

export const changeBannerAction = bannerList => ({
  type: GET_BANNER,
  bannerList
})

export const changeRecommendAction = recommendList => ({
  type: GET_RECOMMEND,
  recommendList
})

// redux-thunk 中定义的函数，进行异步操作
export const getHomeMultidataAction = (dispatch, getState) => {
  axios({url: 'http://123.207.32.32:8000/home/multidata'})
    .then(res => {
      const {banner, recommend} = res.data.data
      dispatch(changeBannerAction(banner.list))
      dispatch(changeRecommendAction(recommend.list))
      console.log('state: ', getState())
    })
}

// redux-saga 拦截的action
export const fetchHomeMultidataAction = {
  type: GET_MULTIDATA
}