import React, {memo} from "react";
import {RecommendContent, RecommendContentLeft, RecommendContentRight, RecommendWrapper} from "./style";

import TopBanner from "./c-cpns/top-banner";
import RecommendDiscover from './c-cpns/hot-discover'
import NewAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";
import Login from './c-cpns/login'

const Recommend = (props) => {
  return (
    <RecommendWrapper>
      <TopBanner/>
      <RecommendContent className="wrap-v2">
        <RecommendContentLeft>
          <RecommendDiscover/>
          <NewAlbum/>
          <RecommendRanking/>
        </RecommendContentLeft>
        <RecommendContentRight>
          <Login/>
        </RecommendContentRight>
      </RecommendContent>
    </RecommendWrapper>
  );
};

export default memo(Recommend);

// const Recommend = memo((props) => {
//   const {topBanners, getBanners} = props
//
//   useEffect(() => {
//     getBanners()
//     console.log(topBanners)
//     return () => {
//
//     };
//   }, [getBanners]);
//
//
//   return (
//     <h1>推荐：{topBanners.length}</h1>
//   )
// })
//
// const mapPropsToState = state => ({
//   topBanners: state.recommend.topBanners
// })
//
// const mapDispatchToState = dispatch => ({
//   getBanners() {
//     dispatch(getTopBannerAction())
//   }
// })
//
// export default connect(mapPropsToState, mapDispatchToState)(Recommend)
