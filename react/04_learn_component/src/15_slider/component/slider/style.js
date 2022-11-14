import styled from 'styled-components'

export const SliderWrapper = styled.div`
    width: 500px;
    height: 10px;
    border: 1px solid #000;
    position: relative;

    span {
        position: absolute;
        left: 0;
        top: -5px;
        width: 20px;
        height: 20px;
        background: red;
        border-radius: 50%;
        cursor: pointer;
    }

    .progress {
        width: 0;
        height: 100%;
        background: blue;
    }
`