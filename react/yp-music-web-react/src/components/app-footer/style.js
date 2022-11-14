import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
  border-top: 1px solid #d3d3d3;
  height: 172px;

  .content {
    display: flex;
  }
`

export const AppFooterLeft = styled.div`
  padding-top: 15px;
  font-size: 12px;
  line-height: 24px;

  ul {
    display: flex;
    color: #999;

    li {
      position: relative;
      padding: 0 8px;
      
      &:first-child {
        padding-left: 0;
      }

      &:not(:last-child)::after {
        content: '|';
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
`

export const AppFooterRight = styled.div`

`