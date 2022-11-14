import {takeLatest, put, all} from 'redux-saga/effects'
import axios from 'axios'
import {GET_MULTIDATA} from './home/constants'
import {changeBannerAction, changeRecommendAction} from './home/actionCreators'

function* fetchMultidata() {
  const res = yield axios({url: 'http://123.207.32.32:8000/home/multidata'})
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  console.log(res)
  yield all([
    yield put(changeBannerAction(banners)),
    yield put(changeRecommendAction(recommends))
    // yield put({
    //   type: GET_BANNER,
    //   bannerList: res.data.data.banner.list
    // }),
    // yield put({
    //   type: GET_RECOMMEND,
    //   recommendList: res.data.data.recommend.list
    // })
  ])
}

function* mySaga() {
  // takeEvery 和 takeLatest
  // takeEvery 每一个都会执行
  // takeLatest 只会执行最后一个
  // yield takeEvery(GET_MULTIDATA, fetchMultidata)
  yield takeLatest(GET_MULTIDATA, fetchMultidata)
}

export default mySaga