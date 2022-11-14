import React, {memo, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "_react-redux@8.0.2@react-redux";
import {getNewAlbumAction} from "../../store/actionCreators";

import {Carousel} from 'antd'
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import AlbumCover from '@/components/album-cover'
import {NewAlbumContent, NewAlbumWrapper} from './style'


const NewAlbum = memo((props) => {
  const carouselRef = useRef(null)

  // redux hook
  const {newAlbums} = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }))
  const dispatch = useDispatch()

  // other hook
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch]);

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title="新碟上架"/>
      <NewAlbumContent>
        <button className="arrow arrow-left sprite_02" onClick={e => carouselRef.current.prev()}></button>
        <Carousel dots={false} ref={carouselRef}>
          {
            [0, 1].map(value => (
              <div className="page-wrapper">
                <ul key={value} className="page">
                  {
                    newAlbums.slice(value * 5, (value + 1) * 5).map(album => (
                      <li className="page-item" key={album.id}>
                        <AlbumCover info={album}/>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </Carousel>
        <button className="arrow arrow-right sprite_02" onClick={e => carouselRef.current.next()}></button>
      </NewAlbumContent>
    </NewAlbumWrapper>
  )
})

export default NewAlbum