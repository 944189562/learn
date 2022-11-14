import {GET_BANNER, GET_RECOMMEND} from "./constants";

const initialHomeState = {
  bannerList: [],
  recommendList: []
}

function homeReducer(state = initialHomeState, action) {
  switch (action.type) {
    case GET_BANNER:
      return {...state, bannerList: action.bannerList}
    case GET_RECOMMEND:
      return {...state, recommendList: action.recommendList}
    default:
      return state
  }
}

export default homeReducer
