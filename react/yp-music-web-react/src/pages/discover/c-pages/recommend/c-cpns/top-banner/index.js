import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "_react-redux@8.0.2@react-redux";

import {getTopBannerAction} from "../../store/actionCreators";
import {BannerLeft, BannerRight, TopBannerWrapper} from "./style";

import {Carousel} from 'antd';

const TopBanner = (props) => {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef()

  const dispatch = useDispatch()
  const {topBanners} = useSelector(state => ({
    // topBanners: state.get('recommend').get('topBanners')
    // getIn 获取深层对象
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopBannerAction())
    return () => {

    };
  }, [dispatch]);

  const bannerChange = useCallback(
    (from, to) => {
      setCurrentIndex(to)
    },
    []
  );


  const bannerRender = topBanners.map(item => (
    <div className="banner-wrapper" key={item.imageUrl}>
      <img className="banner-item" src={item.imageUrl} alt={item.typeTitle}/>
    </div>
  ))

  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl

  return (
    <TopBannerWrapper bgUrl={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            ref={bannerRef}
            effect="fade"
            // autoplay
            beforeChange={bannerChange}
          >
            {
              bannerRender
            }
          </Carousel>
        </BannerLeft>
        <BannerRight/>
        <button onClick={e => bannerRef.current.prev()} className="change-img" id="prev"></button>
        <button onClick={e => bannerRef.current.next()} className="change-img" id="next"></button>
      </div>
    </TopBannerWrapper>
  )
}

export default memo(TopBanner)