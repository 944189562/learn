import React, {memo} from "react";
import {ThemeHeaderRcmWrapper} from "./style";

const ThemeHeaderRcm = memo(props => {
  const {title, keywords = []} = props

  const flagListRender = keywords.map((item, index) => (
    <li key={item} className="keyword">
      <a href="todo">{item}</a>
    </li>
  ))

  return (
    <ThemeHeaderRcmWrapper>
      <h3 className="title sprite_02">{title}</h3>
      <ul className="keywords">
        {flagListRender}
      </ul>
      <div className="more">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </ThemeHeaderRcmWrapper>
  )
})

export default ThemeHeaderRcm