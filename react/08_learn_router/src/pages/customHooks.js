import {useEffect, useState} from "react";
import {ThemeContext, themes} from "../context";

function useThemeContext() {

}

function useScroll() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    function scrollChange() {
      setPosition(window.scrollY)
    }

    window.addEventListener('scroll', scrollChange)

    return () => {
      window.removeEventListener('scroll', scrollChange)
    }
  }, [])

  return position
}

function CustomHooks(props) {
  // 自定义hook 抽离
  // const [position, setPosition] = useState(0)
  //
  // useEffect(() => {
  //   function scrollChange() {
  //     setPosition(window.scrollY)
  //   }
  //
  //   window.addEventListener('scroll', scrollChange)
  //
  //   return () => {
  //     window.removeEventListener('scroll', scrollChange)
  //   }
  // }, [])
  const position = useScroll()

  return (
    <div style={{padding: '1000px 0'}}>
      <h2 style={{position: 'fixed', left: 0, top: 0}}>自定义hook: {position}</h2>
    </div>
  )
}

export default CustomHooks