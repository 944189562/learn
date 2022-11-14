import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
`

export const DiscoverNavWrapper = styled.div`
  width: 100%;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;
  .nav-list {
    margin: 0 auto;
    
    height: 30px;
    display: flex;
    padding-left: 180px;

    .nav a {
      display: inline-block;
      height: 20px;
      padding: 0 13px;
      color: #fff;
      margin: 5px 17px 0;
      border-radius: 12px;
      transition: background-color .3s;
    }
    
    .nav a.active, .nav a:hover {
      text-decoration: none;
      background-color: #9B0909;
    }
  }
`