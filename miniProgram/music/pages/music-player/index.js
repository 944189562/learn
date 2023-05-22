// pages/music-player/index.js
// import { getSongDetail, getLyric } from '../../service/api_player'
// import parseLyric from '../../utils/parseLyric'
import { audioContext, playerStore } from '../../store/index'
const appInstance = getApp()

// scroll-view 判断滚动结束
let timer = null

Page({
  data: {
    id: '',
    currentIndex: 0,
    contentHeight: appInstance.globalData.screenHeight - appInstance.globalData.statusBarHeight - appInstance.globalData.navBarHeight,
    isShowLyric: appInstance.globalData.deviceRadio >= 2,

    // 数据抽离
    currentSong: {},
    lyric: [],

    currentTime: 0,
    currentLyric: '',
    currentLyricIndex: 0,

    sliderValue: 0,
    isSliderChanging: false,
    lyricScrollTop: 0,
    isLyricScroll: false,

    isPlay: false,
    audioPlayIcon: '/assets/images/player/play_pause.png',
    audioPauseIcon: '/assets/images/player/play_resume.png'
  },
  onLoad(options) {
    const { id } = options

    // 获取歌曲信息
    // this.getPageData(id)
    this.setupPlayerStoreListener()

    // 播放歌曲
    audioContext.stop()
    audioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    audioContext.autoplay = true

    // 监听audio事件
    this.setAudioPlayListener(id)
  },
  setupPlayerStoreListener() {
    playerStore.onStates(['currentSong', 'lyric'], ({ currentSong, lyric }) => {
      if (currentSong) {
        this.setData({
          currentSong
        })
      }
      if (lyric) {
        this.setData({
          lyric
        })
      }
    })
  },
  onUnload() {
    if (timer) clearTimeout(timer)
  },
  // ========================== 网络请求 抽离到playerStore中 ==========================
  // getPageData(id) {
  //   this.setData({ id })
  //   getSongDetail(id).then(res => {
  //     this.setData({
  //       currentSong: res.songs[0]
  //     })
  //   })
  //   getLyric(id).then(res => {
  //     const lyricString = res.lrc.lyric
  //     const lyric = parseLyric(lyricString)
  //     this.setData({
  //       lyric
  //     })
  //   })
  // },
  setAudioPlayListener(id) {
    audioContext.onCanplay(() => {
      audioContext.play()
      this.setData({
        isPlay: true
      })
    })

    audioContext.onTimeUpdate(() => {
      console.log('onTimeUpdate')
      const currentTime = audioContext.currentTime * 1000,
        sliderValue = audioContext.currentTime * 1000 / this.data.currentSong.dt * 100

      if (this.data.isSliderChanging || this.data.isLyricScroll) return

      const { currentLyricIndex, currentLyric, lyricScrollTop } = this.getCurrentLyric(currentTime, this.data.lyric)

      this.setData({
        currentTime,
        currentLyric,
        currentLyricIndex,
        lyricScrollTop,
        sliderValue,
      })
    })
  },
  handleSliderChange(event) {
    const { value } = event.detail
    const currentTime = value / 100 * this.data.currentSong.dt / 1000

    audioContext.pause()
    audioContext.seek(currentTime)
    audioContext.play()

    this.setData({
      sliderValue: value,
      isSliderChanging: false
    })
  },
  handleSliderChanging(event) {
    const { value } = event.detail
    const currentTime = value / 100 * this.data.currentSong.dt
    this.setData({
      currentTime,
      isSliderChanging: true
    })
  },
  handleSwiperChange(event) {
    const { current } = event.detail
    this.setData({
      currentIndex: current,
      isSliderChanging: false,
      isLyricScroll: false
    })
  },
  handleScrollChangeStart(event) {
    this.setData({
      isLyricScroll: true
    })
  },
  handleScrollChanging(event) {
    const scrollTop = event.detail.scrollTop
    const currentLyricIndex = Math.ceil(scrollTop / 35)
    this.setData({
      currentLyricIndex
    })
  },
  handleScrollChangeEnd(event) {
    if (!this.data.isLyricScroll) return
    // 判断是否是左右滑动
    if (event.type === 'dragend' && event.detail.velocity.y === 0) {
      this.setData({
        isLyricScroll: false
      })
      return
    }
    const scrollTop = event.detail.scrollTop
    const currentLyricIndex = Math.ceil(scrollTop / 35)
    const currentTime = this.data.lyric[currentLyricIndex]?.time / 1000
    const sliderValue = currentTime * 1000 / this.data.currentSong.dt * 100

    this.setData({
      currentLyricIndex,
    })


    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      audioContext.pause()
      audioContext.seek(currentTime)
      audioContext.play()

      this.setData({
        sliderValue,
        isLyricScroll: false
      })
    }, 100)
  },
  getCurrentLyric(currentTime, lyric) {
    let i = 0
    for (; i < lyric.length; i++) {
      if (currentTime < lyric[i]?.time) {
        break
      }
    }
    return { currentLyricIndex: i - 1, currentLyric: lyric[i - 1]?.text, lyricScrollTop: (i - 1) * 35 }
  },
  audioPlay() {
    if (this.data.isPlay) {
      audioContext.pause()
    } else {
      audioContext.play()
    }
    this.setData({
      isPlay: !this.data.isPlay
    })
  }
})