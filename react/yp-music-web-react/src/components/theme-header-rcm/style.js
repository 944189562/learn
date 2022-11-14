import styled from "styled-components";

export const ThemeHeaderRcmWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #C10D0C;

  .title {
    font-size: 20px;
    line-height: 28px;
    padding-left: 34px;
    background-position: -225px -156px;
  }

  .keywords {
    margin-left: 20px;
    display: flex;

    .keyword {
      padding: 0 20px;
      color: #666666;
      position: relative;
      &:not(:last-child)::after {
        content: '|';
        position: absolute;
        right: 0;
        top: 0;
        color: #cccccc;
      }
    }
  }

  .more {
    margin-left: auto;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`