import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  width: 118px;
  height: auto;
  .bg {
    width: 100%;
    height: 100px;
    position: relative;
    img {
      width: auto;
      height: 100%;
    }
    .mask {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }
  .desc {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
`