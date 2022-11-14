import React, {memo} from 'react'
import {getSizeImage} from '@/utils'
import {AlbumCoverWrapper} from "./style";

const AlbumCover = memo(props => {
  const {info} = props
  const src = getSizeImage(info.picUrl, 100)

  return (
    <AlbumCoverWrapper>
      <div className="bg">
        <img src={src} alt=""/>
        <a href="#/" className="mask sprite_cover">{info.name}</a>
      </div>
      <p className="desc">
        <a href="#/" className="text-nowrap">{info.name}</a>
        <a href="#/">{info.artist.name}</a>
      </p>
    </AlbumCoverWrapper>
  )
})

export default AlbumCover