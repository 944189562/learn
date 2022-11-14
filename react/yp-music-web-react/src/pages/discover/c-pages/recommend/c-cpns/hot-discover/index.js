import React, {memo, useEffect} from 'react'

import {getHotRecommendAction} from '../../store/actionCreators'

import {HotDiscoverWrapper, HotDiscoverContent} from './style'
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import SongsCover from "@/components/songs-cover";
import {shallowEqual, useDispatch, useSelector} from "_react-redux@8.0.2@react-redux";


const RecommendDiscover = props => {
  const {hotRecommends} = useSelector(state=>({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch]);

  const songsCoverRender = hotRecommends.map(item => (
    <SongsCover info={item} key={item.id}/>
  ))

  return (
    <HotDiscoverWrapper>
      <ThemeHeaderRcm title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']}/>
      <HotDiscoverContent>
        {songsCoverRender}
      </HotDiscoverContent>
    </HotDiscoverWrapper>
  )
}

export default memo(RecommendDiscover)