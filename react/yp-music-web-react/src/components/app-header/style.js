import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  background-color: #242424;
  height: 75px;
  font-size: 14px;
  color: #fff;

  .content {
    display: flex;
    height: 70px;
    justify-content: space-between;

    .left {
      display: flex;
      line-height: 70px;

      .logo {
        width: 176px;
        height: 100%;
        background-position: 0 0;

        a {
          float: left;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding-right: 20px;
          text-indent: -9999px;
        }
      }

      .menu {
        display: flex;
        margin-bottom: 0;

        a {
          display: block;
          height: 100%;
          position: relative;
          padding: 0 20px;
          color: #ccc;
        }

        a:hover, a.active {
          color: #fff;
          text-decoration: none;
          background: #000;
          transition: all .3s;
        }

        a::after {
          display: block;
          content: '';
          width: 12px;
          height: 7px;
          position: absolute;
          left: 50%;
          bottom: -1px;
          transform: translateX(-50%);
          background: url(${require('@/assets/img/sprite_01.png')}) no-repeat -9999px 0;
          transition: all .3s;
        }

        a.active::after {
          background-position: -226px 0;
        }
      }
    }

    .right {
      height: 70px;
      display: flex;
      align-items: center;
      font-size: 12px;
      .ant-input-affix-wrapper {
        width: 158px;
        height: 32px;
        border-radius: 15px;
      }
      input {
        font-size: 12px;
      }
      button {
        height: 32px;
        margin-left: 20px;
        background: transparent;
      }
      .create-center {
        width: 80px;
        border:1px solid #ccc;
        border-radius: 20px;
        line-height: 30px;
        color: #ccc;
        transition: all .3s;
        cursor: pointer;
      }
      .create-center:hover {
        color: #fff;
        border-color: #fff;
      }
    }
  }

  .divider {
    height: 5px;
    width: 100%;
    background-color: #C20C0C;
  }
`