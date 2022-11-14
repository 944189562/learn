import {PureComponent, Profiler} from "react";
import styled, {keyframes, css} from "styled-components";

const SDiv = styled.div`
  color: red;
`

const SUl = styled.ul.attrs(props => ({
  title: '列表数据',
  color: props.color || 'yellow'
}))`
  list-style: none;
  padding: 10px;
  font-size: 16px;
  li {
    color: ${props => props.color};
  }
  li.something {
    color: orange;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`

const RotateDiv = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

export default class Main extends PureComponent {
  render() {
    return (
      <>
        <SDiv>
          <h2>Main</h2>
          <SUl color='green'>
            <li>类表数据1</li>
            <li className={'something'}>类表数据2</li>
            <li>类表数据3</li>
            <li>类表数据4</li>
            <li>类表数据5</li>
          </SUl>
        </SDiv>
        <Profiler id="test" onRender={(...args) => console.log(args)}>
          <RotateDiv>&lt; 💅🏾 &gt;</RotateDiv>
        </Profiler>
      </>
    )
  }
}