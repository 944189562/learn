import React, {memo} from "react";
import {getSizeImage} from "@/utils";

import {SongsCoverWrapper} from './style'

const SongsCover = memo((props) => {
  const {info} = props
  const src = getSizeImage(info.picUrl, 140)

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={src} alt=""/>
        <a href="#/" className="mask sprite_cover">{info.title}</a>
        <div className="bottom">
          <i className="headphone sprite_icon"></i>
          <span className="play-volume">35万</span>
          <i className="play sprite_icon"></i>
        </div>
      </div>
      <p className="cover-content">
        <a className="name" href="#/">{info.name}</a>
      </p>
    </SongsCoverWrapper>
  )
})

export default SongsCover