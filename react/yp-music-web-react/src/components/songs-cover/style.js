import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  flex: 0 1 140px;
  height: auto;
  margin: 10px 0;
  padding-bottom: 30px;
  .cover-top {
    width: 100%;
    height: 140px;
    position: relative;
    .mask {
      display: block;
      position: absolute;
      inset: 0;
      background-position: 0 0;
    }
    img {
      width: 100%;
      height: auto;
    }
    .bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 27px;
      display: flex;
      align-items: center;
      background: url(${require('@/assets/img/sprite_cover.png')}) no-repeat;
      background-position: 0 -537px;
      color: #ccc;
      padding: 0 10px;
      .headphone {
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
        margin-right: 9px;
      }
      .play {
        width: 16px;
        height: 17px;
        margin-left: auto;
        background-position: 0 0;
        cursor: pointer;
        &:hover {
          
        }
      }
    }
  }
  .cover-content {
    margin: 8px 0 3px;
    font-size: 14px;
    color: #000;
  }
`