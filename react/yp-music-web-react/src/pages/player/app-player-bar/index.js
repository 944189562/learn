import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import {getPlaySong, getSizeImage} from "@/utils";
import {getSongUrl} from '@/services/player'

import {Slider} from "antd";
import {AppPlayerBarWrapper, Control, Operator, PlayInfo} from "./style";
import {useDispatch, useSelector} from "_react-redux@8.0.2@react-redux";
import {NavLink} from "react-router-dom";
import {getCurrentSongAction} from "../store/actionCreators";


const AppPlayerBar = memo(props => {
  // redux
  const {currentSong} = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }))
  const dispatch = useDispatch()

  // other hook
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(null)

  useEffect(() => {
    dispatch(getCurrentSongAction(1954090536))
  }, [dispatch])
  useEffect(() => {
    getSongUrl(1954090536).then(res => {
      audioRef.current.src = res.data[0].url
    })
  }, []);


  const sliderChange = useCallback(
    () => {

    },
    [],
  )

  const sliderAfterChange = useCallback(
    () => {

    },
    [],
  )

  function changeMusic() {

  }

  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  function changeSequence() {

  }

  const picUrl = ''
  const singerName = ''
  const progress = 0
  const showCurrentTime = '00:00'
  const showDuration = '04:30'
  const sequence = 1


  return (
    <AppPlayerBarWrapper>
      <div className="bg-left sprite_player"></div>
      <div className="bg-right">
        <div className="bg-right_1 sprite_player"></div>
        <div className="bg-right_2 sprite_player"></div>
      </div>
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"
                  onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play"
                  onClick={e => playMusic()}></button>
          <button className="sprite_player next"
                  onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt=""/>
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30}
                      value={progress}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}/>
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef}></audio>
    </AppPlayerBarWrapper>
  )
})

export default AppPlayerBar