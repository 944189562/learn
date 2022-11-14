import styled from "styled-components";

export const TopBannerWrapper = styled.div`
  width: 100%;
  height: 285px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${props => props.bgUrl}) center/6000px;
    filter: blur(15px);
    z-index: -1;
    transition: all .4s;
  }

  .banner {
    height: 100%;
    margin: 0 auto;
    display: flex;
    position: relative;
    
    .slick-dots {
      li {
        width: 20px;
        height: 20px;
        button {
          width: 20px;
          height: 20px;
          background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat 3px -343px;
          transition: opacity .5s;
        }
      }
      li.slick-active {
        button {
          background-position-x: -16px;
        }
      }
    }

    .change-img {
      width: 37px;
      height: 63px;
      position: absolute;
      top: 50%;
      z-index: 99;
      transform: translateY(-50%);
      background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat 0 -9999px/auto;
      transition: background-color .5s;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    #prev {
      left: -68px;
      background-position: 0 -360px;
    }

    #next {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  height: 100%;

  .banner-wrapper {
    width: 100%;
    height: 285px;

    .banner-item {
      width: 100%;
      height: 100%;
    }
  }
`

export const BannerRight = styled.div`
  flex: 254px;
  height: 100%;
  background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;
  cursor: pointer;
`