import React, { useState, useRef, useEffect } from "react";
import { SliderWrapper } from "./style";

export default function Slider() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [disabled, setDisabled] = useState(false)
  const [offsetX, setOffsetX] = useState(0)

  const sliderRef = useRef(null)
  const sliderBtnRef = useRef(null)

  function onMouseDown(e) {
    setDisabled(true)
  }

  function onMoveStart(e) {
    e.stopPropagation()
    console.log(e)
    const {clientX: startX, clientY: startY} = e
    const {left, top, width: xWidth, height} = sliderBtnRef.current.getBoundingClientRect()
    const shiftX = startX - left
    const shiftY = startY - top
    
    const onMouseMove = (evt) => {
      e.preventDefault()
      const {pageX: moveX, pageY: moveY} = evt
      let offsetX = moveX - shiftX
      const offsetY = moveY - startY
      
      const {width, height} = sliderRef.current.getBoundingClientRect()
      
      offsetX = Math.max(0, offsetX)
      offsetX = Math.min(offsetX, width - xWidth)
      let offsetPercent = offsetX / (width - xWidth)
      let offset = parseInt(offsetPercent * 100)
      console.log(offset, ' %')
      console.log(offsetX)
      setOffsetX(offsetX)
    }

    const onMouseUp = (e) => {
      e.preventDefault()

      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  useEffect(() => {
    sliderBtnRef.current.ondragstart = () => {
      return false
    }
  })

  function onMoveUp(e) {
    setDisabled(false)
  }

  return (
    <SliderWrapper ref={sliderRef} onMouseDown={(e) => onMouseDown(e)} onMouseMove={(e) => onMouseDown(e)}>
      <span ref={sliderBtnRef} style={{left: `${offsetX}px`  }} onMouseDown={e => onMoveStart(e)} onMouseUp={e => onMoveUp(e)}></span>
      <div className="progress" style={{width: `${offsetX}px`}}></div>
      <i>{offsetX}</i>
    </SliderWrapper>
  );
}
