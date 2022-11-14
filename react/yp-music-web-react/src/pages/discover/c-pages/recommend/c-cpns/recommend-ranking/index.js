import React, {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "_react-redux@8.0.2@react-redux";

import {RecommendRankingContent, RecommendRankingWrapper} from "./style";
import ThemeHeaderRcm from "../../../../../../components/theme-header-rcm";
import {getRecommendRankingAction} from "../../store/actionCreators";

const RecommendRanking = memo(props => {
  const {upRanking = [], newRanking = [], originRanking = []} = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommendRankingAction(0))
    dispatch(getRecommendRankingAction(2))
    dispatch(getRecommendRankingAction(3))
  }, [dispatch])

  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRcm title="榜单"/>
      <RecommendRankingContent>
        {
          upRanking.map(item => (
            <div>{item.name}</div>
          ))
        }
      </RecommendRankingContent>
    </RecommendRankingWrapper>
  )
})

export default RecommendRanking