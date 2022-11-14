import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  width: 689px;
`

export const NewAlbumContent = styled.div`
  width: 100%;
  height: 186px;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  margin-top: 20px;
  position: relative;
  .page-wrapper {
    padding: 0 22px 0 32px;
    margin-top: 28px;
    .page {
      display: flex;
      justify-content: space-between;
    }
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 17px;
    height: 17px;
    cursor: pointer;
    z-index: 2;
  }
  .arrow-left {
    left: 7px;
    background-position: -260px -75px;
  }
  .arrow-right {
    right: 7px;
    background-position: -300px -75px;
  }
`